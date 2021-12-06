// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const PreChristmasTournaments = async() => {
    try {
        let christmasTournament = sql.promise().query(`SELECT COUNT(startDate) as Started
        FROM Tournament
        WHERE DATE(startDate) < DATE('2021-11-25')`);

        return christmasTournament;
    } catch {
        console.log(error);
    }
}

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
    PreChristmasTournaments,
    MostWins
}