const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api requests run through here
require("./routes")(app);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));