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

//query 4
const TopAgents = async() => {
    try {
        let topAgents = sql.promise().query(
        `SELECT aName,aType,aWins
        FROM Agent
        WHERE aWins > (SELECT AVG(aWins) as avg
        FROM Agent);`
        );

        return topAgents;
    } catch {
        console.log(error);
    }
}

module.exports = {
    MostWins,
    TopAgents
}