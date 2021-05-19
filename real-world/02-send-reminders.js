require('dotenv').config()
const {google} = require('googleapis');
const credentials = require('./credentials.json');
const twilio = require('twilio');

const scopes = ['https://www.googleapis.com/auth/calendar'];

google.auth.getClient({ 
    credentials: credentials,
    scopes : scopes
}).then(client => {

    //検索範囲を設定 - 2021/05/20
    const timeMin = new Date(2021, 4, 20, 0, 0, 0);
    const timeMax = new Date (2021, 4, 21, 0, 0, 0);

    const calendar = google.calendar({ version: 'v3', auth: client});
    calendar.events.list({
        calendarId: process.env.CALENDAR_ID,
        timeMin: timeMin,
        timeMax: timeMax,
        timeZone: 'JST'
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {

            // 予定一覧
            const appointments = res.data.items;
            
            // Twilioクライアントを初期化
            const client = new twilio(
                process.env.TWILIO_ACCOUNT_SID,
                process.env.TWILIO_AUTH_TOKEN
            );

            appointments.forEach(({ start, description }) => {
                const message = `本日は来場日です。開始時刻: ${new Date(start.dateTime).toLocaleTimeString()} です。5分前までに会場にお越しください。`;
                const to = description;
                client.messages.create({
                    from: 'twilio番号',
                    to: to,
                    body: message
                }).then(message => console.log(message.sid));
            });
        }
    })

});


