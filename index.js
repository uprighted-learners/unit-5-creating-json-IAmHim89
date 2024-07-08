//express library
const express = require("express");
//variable holding the activation of express
const app = express();
//json file
const api = "/answers.json";
//port server #
const PORT = 3000;

//get response for json file/path
app.get("/", (req, res) => {
  res.send({ api });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
