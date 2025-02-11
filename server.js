const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./models");
const {Sequelize} = require('./config/dbConfig.js')

db.sequelize_config.sync(
    {force: false}
).then(() =>{
    console.log("Re-sync success")
})

require("./routes/data.routes.js")(app);

app.listen(9000, () => {
    console.log(" server on set");
});