module.exports = app => {
    const User = require("./user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", User.create);
  
    app.use('/api/user', router);
  };