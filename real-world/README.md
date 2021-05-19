<h1 align="center">🚀 Twilio Liftoff: Twilioアプリケーションの開発 🚀</h1>


このディレクトリにはTwilioからのリクエストを検証するためのサンプルが配置されています。

サンプルを動作させる場合は[Node.js](https://nodejs.org/en/)をインストールした状態で下記のコマンドを実行してください。

```bash
npm install
```

[環境変数](https://www.twilio.com/blog/how-to-set-environment-variables-jp)に下記のキーを追加し、それぞれTwilioコンソールから値を設定してください。
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`

Webアプリケーションを起動させる場合は下記のコマンドを実行してください。

```bash
npm start
```

[Twilioコンソール](https://www.twilio.com/console/phone-numbers/incoming)で購入済みTwilio番号の設定画面を開きます。

`Voice`セクションの`A CALL COMES IN`にこのアプリケーションの`URL/voice`を指定します。

（例）https://hoge.ngrok.io/voice

`01-server.js`のその他のコードはTwilio - Google Calendar APIデモで利用したサンプルコードです。どのように動作しているかについてはレコーディングをご覧ください。

Googleカレンダーから予定を取得し、該当するユーザーにSMSを送信するコードは `02-send-reminders.js`で実装しています。こちらもレコーディングをご覧ください。
