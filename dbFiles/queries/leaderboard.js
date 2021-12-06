// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const MostWins = async() => {
    try {
        const mostWins = await sql.promise().query(
        `SELECT username, pWin
        FROM Player
        ORDER BY pWin DESC`);

        return mostWins[0];
    } catch {
        console.log(error);
    }
}

const TopAgents = async() => {
    try {
        const topAgents = await sql.promise().query(
        `SELECT aName,aType,aWins
        FROM Agent
        WHERE aWins > (SELECT AVG(aWins) as avg
        FROM Agent);`
        );

        return topAgents[0];
    } catch {
        console.log(error);
    }
}

module.exports = {
    MostWins,
    TopAgents
}