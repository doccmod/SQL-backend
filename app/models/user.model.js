const sql = require("./db.js");

const modelUser = function(User) {
    this.name = User.name;
    this.email = User.email;
    this.password = User.password;
};

modelUser.create = (newUser, result) => {
    sql.query("INSERT INTO user", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  };