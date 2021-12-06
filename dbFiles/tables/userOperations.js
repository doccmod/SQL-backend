const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const getUsers = async() => {
    try {
        let uGet = sql.promise().query('SELECT * from User');

        // returns undefined?
        //console.log(uGet);

        // returns a whole bunch of stuff other than the actual output
        return uGet;
    } catch {
        console.log(error);
    }
}

const createUser = async(user) => {
    try {
        let uCreate = sql.promise().query(`INSERT INTO User(name, email, password)VALUES
        ('${user.name}', '${user.email}', '${user.password}')`);
        return uCreate;
    } catch {
        console.log(error);
    }
}

module.exports = {
    getUsers,
    createUser
}
