// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const ChangePass = async(username, newPassword) => {
    try {

        let changePass = sql.promise().query(
        `UPDATE User
        SET password = '${newPassword}'
        WHERE name = '${username}'`);
        
        return changePass;

    } catch {
        console.log(error);
    }
}

module.exports = {
    ChangePass
}