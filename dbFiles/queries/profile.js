// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const GetWins = async(username) => {
    try {

        let getWins = sql.promise().query(
        `SELECT pWin
        FROM Player
        WHERE username = ${username}`);
        
        return getWins;

    } catch {
        console.log(error);
    }
}

const GetLosses = async(username) => {
    try {
        let getLoss = sql.promise().query(
        `SELECT pLoss
        FROM Player
        WHERE username = ${username}`);

        return getLoss;

    } catch {
        console.log(error);
    }
}

const GetTeamName = async() => {
    try {
        let getTeamName =

        return getTeamName;
    } catch {
        console.log(error);
    }
}

module.exports = {
    GetWins,
    GetLosses,
    GetTeamName
}