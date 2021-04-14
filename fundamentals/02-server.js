const express = require('express');
const twilio = require('twilio');
const app = new express();


app.all('/', (req, res, next) => {
    res.send('hello express');
})

app.all('/voice', (req, res, next) => {

    res.contentType("application/xml");
    const response = '<Response><Say language="ja-JP">こんにちは世界フロムエクスプレス</Say></Response>'
    res.send(response);
});

app.all('/voice-dynamic', (req, res, next) => {

    res.contentType("application/xml");
    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say({language: "ja-JP"}, "こんにちは世界フロムエスディーケー");

    res.send(twiml.toString());
});

app.listen(3000, () => {
    console.log('listening port 3000');
})