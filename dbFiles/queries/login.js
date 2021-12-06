// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');


//query 2
const MostWins = async() => {
    try {
        let mostWins = sql.promise().query(`SELECT username, pWin
        FROM Player
        ORDER BY pWin DESC`);

        return mostWins;
    } catch {
        console.log(error);
    }
}






module.exports = {
    PreHolidayDate,
    MostWins,
    UsersFromWinningTeam
}