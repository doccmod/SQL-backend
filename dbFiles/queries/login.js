// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const PlayerLogin = async(username) => {
    try {
        let playerLogin = sql.promise().query(
        `SELECT password
        FROM User
        WHERE name = '${username}'`);

        return playerLogin;

    } catch {
        console.log(error);
    }
}

module.exports = {
    PlayerLogin
}