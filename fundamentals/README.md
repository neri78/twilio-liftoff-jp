<h1 align="center">🚀 Twilio Liftoff: Twilio入門 🚀</h1>


このディレクトリにはTwilioを使い始めるためのサンプルが配置されています。

[`01-voice-twiml.xml`](01-voice-twiml.xml)を[TwiML Bin](https://jp.twilio.com/console/twiml-bins)にコピーして利用できます。


サンプルを動作させる場合は[Node.js](https://nodejs.org/en/)をインストールした状態で下記のコマンドを実行してください。

```bash
npm install
```

環境変数に下記の値を追加し、それぞれTwilioコンソールから値を設定してください。
- `ACCOUNT_SID`
- `AUTH_TOKEN`

Webアプリケーションを起動させる場合は下記のコマンドを実行してください。

```bash
npm start
```

音声通話発信を試す場合は`twilio_number`、`my_number`にそれぞれTwilio番号、発信先番号を設定し、次のコマンドを実行してください。
```bash
node 03-make-calls.js
```

SMS 送信を試す場合は`twilio_number`、`my_number`にそれぞれTwilio番号、発信先番号を設定し、次のコマンドを実行してください。
```bash
node 04-send-sms.js
```