<h1 align="center">🚀 Twilio Liftoff: スケーリング 🚀</h1>


このディレクトリにはTwilioからのリクエストを検証するためのサンプルが配置されています。

サンプルを動作させる場合は[Node.js](https://nodejs.org/en/)をインストールした状態で下記のコマンドを実行してください。

```bash
npm install
```

[環境変数](https://www.twilio.com/blog/how-to-set-environment-variables-jp)に下記のキーを追加し、それぞれTwilioコンソールから値を設定してください。


- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`

続けて[Twilioコンソール](https://www.twilio.com/console/phone-numbers/incoming)で番号を購入するか、購入済みTwilio番号を次のキーで環境変数に追加してください。

- `TWILIO_NUMBER`

各ファイルの`numbers`にはSMSの送信先となる電話番号を[E.164形式](https://www.twilio.com/docs/glossary/what-e164)、コンマ区切りで入力します。

また、`statusCallback`または`status-callback`で指定しているURLにはTwilioからステータスの更新が送られてきます。`Express`による実装例を`status-callback.js`に記載しています。このサーバーのURL + `/status-callback`を値として利用してください。


それぞれの`.js`ファイルの内容は次の通りです。

- `01-send-messages-queue.js` - キューを使ったSMS送信
- `02-send-messages-messaging-service.js` - Twilio番号を束ねた[Messaging Service](https://jp.twilio.com/docs/messaging/services/services-send-messages)を指定したSMS送信。`messaging_service_sid`にMessaging Service SIDの値を指定してください。
- `03-send-messages-notify.js` - [Twilio Notify](https://jp.twilio.com/docs/notify/quickstart/sms)を利用したSMS送信。`notify_service_sid`にNotification Service SIDの値を指定してください。

どのように動作しているかについてはレコーディングをご覧ください。
