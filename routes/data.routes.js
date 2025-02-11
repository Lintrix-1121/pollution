const {Router} = require("express");

module.exports = app => {
    const data_controller = require('../Controllers/data.controller');
    var router = require("express").Router();

    router.post("/sensor", data_controller.PostSensor);
    router.get("/data", data_controller.GetSensorData);



    app.use('/api', router);
}