var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Renders Summary home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// This function returns UNIX timestamp
const getUnix = (param) => {
  if (param.includes(" ")) {
    return Date.parse(parseInt(param));
  } else {
    return parseInt(param);
  }
}

// This function returns date in UTC format
const getUTC = (param) => {
  if (param.includes(" ")) {
    return new Date(param).toUTCString();
  } else {
    return new Date(parseInt(param)).toUTCString();
  }
}

// This route handles user input of either a date or UNIX timestamp
app.get("/api/timestamp/:date_string", (req, res) => {
  let parameters = req.params.date_string;
  let obj;

  // This check determines whether "obj" object has an error or not
  if (getUnix(parameters) === null || getUTC(parameters) === "Invalid Date") {
    obj = {
      error: "Invalid Date"
    }
  } else {
    obj = {
      unix: getUnix(parameters),
      utc: getUTC(parameters)
    }
  }
  res.send(obj);

})

// This listens for a server
app.listen(PORT, () => {
  console.log("Server running");
})