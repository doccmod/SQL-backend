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

const UsersFromWinningTeam = async() => {
    try {
        let usersFromWinningTeam = sql.promise().query(`CREATE VIEW usersFromWinningTeam AS (SELECT userId
            FROM TeamPlayers
            WHERE teamId = (SELECT teamId
                FROM Team
                WHERE tName = (SELECT mWinner
                    FROM VMatch
                    WHERE tournamentId = 1 AND bracketLevel = (SELECT maxBracketLevel
                        FROM Tournament
                        WHERE TournamentId = '1')))`);

        return usersFromWinningTeam;
    } catch {
        console.log(error);
    }
}

module.exports = {
    PreChristmasTournaments,
    MostWins,
    UsersFromWinningTeam
}