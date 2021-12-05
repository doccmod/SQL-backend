const sql = require("./db.js");

const user = function(User) {
    this.title = User.title;
    this.description = User.description;
    this.published = User.published;
};

//user.create = ()