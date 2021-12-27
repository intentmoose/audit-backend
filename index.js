const express = require("express");
const app = express();
var axios = require("axios");
var cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
let production = process.env.NODE_ENV === "production" ? true : false;
if (!production) {
  var cors = require("cors"); 
  app.use(cors());
}


var token;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes")(app);

// app.get("/test", (req, res) => {
//   res.send("Successful response.");
// });

app.listen(PORT, () => console.log(`Listening on ${PORT}`));