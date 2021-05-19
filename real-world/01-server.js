require('dotenv').config();
const express = require('express');
const twilio = require('twilio');

const app = new express();
app.use(express.urlencoded({ extended: true}));



app.all('/', (req, res, next) => {
    res.send('hello express');
})

app.all('/voice', (req, res, next) => {

    // このサーバーのURL
    const url = "https://サーバーURL/voice";
    const params = req.body;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const signature = req.headers['x-twilio-signature'];

    // リクエストの検証
    if (twilio.validateRequest(authToken, signature, url, params)) {
        res.contentType("application/xml");
        const response = '<Response><Say language="ja-JP">こんにちは世界フロムエクスプレス</Say></Response>'
        res.send(response);
    
    } else {
        res.status(401).send('not authorized');
    }
});


app.all('/book-appointment', async (req, res, next) => {
 
    // 会話文
    const msg = "来場予約システムへのご連絡ありがとうございます。来場を予定されている日付を8桁の数字でお伝えください。たとえば5月19日午後1時の場合は、ゼロ、ゴ、イチ、キュウ、イチ、サン、ゼロ、ゼロと入力してください。入力がおわりましたらシャープを押すかそのままお待ちください。"

    res.contentType("application/xml");
    const twiml = new twilio.twiml.VoiceResponse();

    const gather = twiml.gather({
        timeout: 10,
        numDigits: 8,
        finishOnKey: '#',
        action : 'gather-process-hours',
        method: 'POST'
    });
    gather.say({language: 'ja-JP'}, msg);
    twiml.say({language: 'ja-JP'}, '入力が確認できませんでした。再度お試しください。');
    res.send(twiml.toString());
})

app.all('/gather-process-hours', async (req, res, next) => { 

    res.contentType("application/xml");
    const twiml = new twilio.twiml.VoiceResponse();

    const Digits = req.body.Digits;
    const month = parseInt(Digits.substr(0,2)) - 1;
    const date = parseInt(Digits.substr(2,2));
    const hour = parseInt(Digits.substr(4,2));
    const minute = parseInt(Digits.substr(6,2));
    
    const startTime = new Date(2021, month, date, hour, minute);
    const endTime = new Date(2021, month, date, hour + 1, minute);

    const twimlString = await bookAppointment(startTime, endTime, req.body.From);

    twiml.say({language: 'ja-JP'}, twimlString);

    res.send(twiml.toString());
})

async function bookAppointment(startTime, endTime, contactTo) {
    const {google} = require('googleapis');
    const credentials = require('./credentials.json');
    const scopes = ['https://www.googleapis.com/auth/calendar'];

    const client = await google.auth.getClient({ 
        credentials: credentials,
        scopes : scopes
    });

    const calendar = google.calendar({ version: 'v3', auth: client}); 

    const event = {
        summary : '来場予定',
        description: contactTo,
        start: {
            dateTime : startTime.toISOString(),
            timeZone : 'JST'
        },
        end : {
            dateTime : endTime.toISOString(),
            timeZone : 'JST'
        }
    }

    const {err, res} = await calendar.events.insert({
        calendarId: process.env.CALENDAR_ID,
        resource: event
    });

    if (err) {
        return '予期せぬエラーにより予約をお取りすることができませんでした。再度お試しください。';
    } else {
        return `予約が ${new Date(event.start.dateTime).toLocaleString()}で完了しました。5分前までに会場にお越しください。お越しの際はマスクの着用を徹底してください。`;
    }
}



app.listen(3000, () => {
    console.log('listening port 3000');
})