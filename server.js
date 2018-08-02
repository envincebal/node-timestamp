const express = require("express");
const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Renders Summary home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/", (req,res) => {
  res.send("This is working");
})

app.listen(PORT, () => {
  console.log("Server running");
})