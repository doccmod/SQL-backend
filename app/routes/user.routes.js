module.exports = app => {
    const user = require("./user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", user.create);
  
    app.use('/api/user', router);
  };