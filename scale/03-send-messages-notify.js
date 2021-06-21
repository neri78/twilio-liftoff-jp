require('dotenv').config({ path: '../.env'});
const twilio = require('twilio');

const client = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

// 送信先の番号を保持する配列
const numbers = [];

// Twilio NotifyのService SID
const notify_service_sid = ''

const service = client.notify.services(notify_service_sid);

// バインディングを作成
const bindings = numbers.map((number) =>
  JSON.stringify({ binding_type: "sms", address: number })
);

// 複数のSMS送信を１リクエストで実現
// status_callbackにはURLを指定。詳細はREADME.mdをご覧ください。
service.notifications
    .create({
        toBinding: bindings,
        body: 'Twilio Notifyから一斉送信されています。',
        sms : { status_callback: ''}
}).then((notification) => console.log(notification.sid))
.catch((err) => console.log(err));

