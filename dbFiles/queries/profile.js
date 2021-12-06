// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const GetWins = async(username) => {
    try {

        const getWins = await sql.promise().query(
        `SELECT pWin
        FROM Player
        WHERE username = '${username}'`);
        
        return getWins[0];

    } catch {
        console.log(error);
    }
}

const GetLosses = async(username) => {
    try {
        const getLoss = await sql.promise().query(
        `SELECT pLoss
        FROM Player
        WHERE username = '${username}'`);

        return getLoss[0];

    } catch {
        console.log(error);
    }
}

const GetTeamName = async() => {
     try {
         const getTeamName = await sql.promise().query(
        `SELECT tName
        FROM Team

        WHERE 
        `
         return getTeamName[0];
     } catch {
         console.log(error);
     }
 }

module.exports = {
    GetWins,
    GetLosses,
    GetTeamName
}