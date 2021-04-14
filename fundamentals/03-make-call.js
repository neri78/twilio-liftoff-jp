const twilio = require('twilio');

const client = new twilio(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN
);

const twilio_number = '';
const my_number = ''

client.calls.create({
    from: twilio_number,
    to: my_number,
    twiml: '<Response><Say language="ja-JP">こんにちは世界フロムえーぴーあい</Say></Response>'
}).then(call => console.log(call.sid));