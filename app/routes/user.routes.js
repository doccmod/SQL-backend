module.exports = app => {
    const tutorials = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", user.create);
  
    app.use('/api/user', router);
  };