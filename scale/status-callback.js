const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));


// ステータスコールバック用のルーティング
app.post("/status-callback", (req, res) => {
  const { MessageStatus, MessageSid } = req.body;
  console.log(`${MessageSid}: ${MessageStatus}`);
  res.contentType("application/xml");
  res.send("<Response/>");
});

app.post("/debugger", (req, res) => {
  const { Payload } = req.body;
  console.log(`Debugger: ${Payload}`);
  res.sendStatus(200);
});


const port = process.env.PORT || "3000";
app.listen(port, () =>
  console.log("Application has started on http://localhost:3000")
);