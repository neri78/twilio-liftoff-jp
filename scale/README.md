<h1 align="center">ð Twilio Liftoff: ã¹ã±ã¼ãªã³ã° ð</h1>


ãã®ãã£ã¬ã¯ããªã«ã¯Twilioããã®ãªã¯ã¨ã¹ããæ¤è¨¼ããããã®ãµã³ãã«ãéç½®ããã¦ãã¾ãã

ãµã³ãã«ãåä½ãããå ´åã¯[Node.js](https://nodejs.org/en/)ãã¤ã³ã¹ãã¼ã«ããç¶æã§ä¸è¨ã®ã³ãã³ããå®è¡ãã¦ãã ããã

```bash
npm install
```

[ç°å¢å¤æ°](https://www.twilio.com/blog/how-to-set-environment-variables-jp)ã«ä¸è¨ã®ã­ã¼ãè¿½å ããããããTwilioã³ã³ã½ã¼ã«ããå¤ãè¨­å®ãã¦ãã ããã


- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`

ç¶ãã¦[Twilioã³ã³ã½ã¼ã«](https://www.twilio.com/console/phone-numbers/incoming)ã§çªå·ãè³¼å¥ããããè³¼å¥æ¸ã¿Twilioçªå·ãæ¬¡ã®ã­ã¼ã§ç°å¢å¤æ°ã«è¿½å ãã¦ãã ããã

- `TWILIO_NUMBER`

åãã¡ã¤ã«ã®`numbers`ã«ã¯SMSã®éä¿¡åã¨ãªãé»è©±çªå·ã[E.164å½¢å¼](https://www.twilio.com/docs/glossary/what-e164)ãã³ã³ãåºåãã§å¥åãã¾ãã

ã¾ãã`statusCallback`ã¾ãã¯`status-callback`ã§æå®ãã¦ããURLã«ã¯Twilioããã¹ãã¼ã¿ã¹ã®æ´æ°ãéããã¦ãã¾ãã`Express`ã«ããå®è£ä¾ã`status-callback.js`ã«è¨è¼ãã¦ãã¾ãããã®ãµã¼ãã¼ã®URL + `/status-callback`ãå¤ã¨ãã¦å©ç¨ãã¦ãã ããã


ããããã®`.js`ãã¡ã¤ã«ã®åå®¹ã¯æ¬¡ã®éãã§ãã

- `01-send-messages-queue.js` - ã­ã¥ã¼ãä½¿ã£ãSMSéä¿¡
- `02-send-messages-messaging-service.js` - Twilioçªå·ãæã­ã[Messaging Service](https://jp.twilio.com/docs/messaging/services/services-send-messages)ãæå®ããSMSéä¿¡ã`messaging_service_sid`ã«Messaging Service SIDã®å¤ãæå®ãã¦ãã ããã
- `03-send-messages-notify.js` - [Twilio Notify](https://jp.twilio.com/docs/notify/quickstart/sms)ãå©ç¨ããSMSéä¿¡ã`notify_service_sid`ã«Notification Service SIDã®å¤ãæå®ãã¦ãã ããã

ã©ã®ããã«åä½ãã¦ãããã«ã¤ãã¦ã¯ã¬ã³ã¼ãã£ã³ã°ããè¦§ãã ããã
