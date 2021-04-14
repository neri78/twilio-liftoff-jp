const twilio = require('twilio')(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN
);

//SMS送信可能なTwilio番号、またはAlphanumeric Sender ID(英数字送信者ID)を指定してください。
const twilio_number = '';

const my_number = ''

client.messages.create({
    from : twilio_number,
    to: my_number,
    body : 'Twilioから送っています。'
}).then (message => console.log(message.sid));
