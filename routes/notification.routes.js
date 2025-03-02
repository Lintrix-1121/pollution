
const {Router} = require("express");

module.exports = app => {
    const notificationController = require('../Controllers/notification.controller');

    var router = require("express").Router();

    router.post('/notification', notificationController.PostNotification);
    router.get('/notifications', notificationController.GetNotifications);


    app.use('/api', router);
}