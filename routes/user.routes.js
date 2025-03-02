const {Router} = require("express");

module.exports = app => {
    const users_controller = require ('../Controllers/user.controller');
    var router = require("express").Router();

    router.post('/signup', users_controller.Signup);
    router.post('/login', users_controller.Login);
    



    app.use('/api', router);
}
