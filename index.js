
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require('path');
const cors = require('cors');
dotenv.config();

const app = express();
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});

const brewBatchRoute = require("./Routes/BrewBatchRoute");
const fermenterRoute = require("./Routes/FermenterRoute");


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'Public')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'Public','index.html'));
});
app.use(brewBatchRoute);
app.use(fermenterRoute);




const port=process.env.PORT || 3001;
app.listen(port, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log(`Web server is now listening for messages on port ${port}`, err);

});