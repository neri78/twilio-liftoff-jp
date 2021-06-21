require('dotenv').config();
const twilio = require('twilio');


const Queue = require('queue');
const q = new Queue({concurrency : 2});

const client = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

// Messaging Service Sid
const messaging_service_sid = ''

// 送信先の番号を保持する配列
// この配列にSMSを受信可能な番号をE.164形式（例: 090-xxxx-yyyyの場合は +8190xxxxyyyy）、カンマ区切りで追加
const numbers = []; 

// SMS送信リクエストをキューに追加
// statusCallbackのURLは別途指定します。
// 実装については、status-callback.jsを確認してください
numbers.forEach((number) => {
    q.push(() => {
        return client.messages.create({
            from : messaging_service_sid,
            to: number,
            body : 'Twilio番号からQueueで送っています。',
            statusCallback: '' //このURLを編集
        })
        .then (message => console.log(message.sid))
        .catch(err => console.log(err));
    });
});

q.start();