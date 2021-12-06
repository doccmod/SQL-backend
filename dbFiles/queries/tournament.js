// Gets the dbConfig and uses mysql2
const sql = require("../config/dbConfig.js");
mysql = require('mysql2');

const TournamentList = async(tRegion) => {
    try {
        let tournamentList = sql.promise().query(
        `SELECT startDate,
        FROM Tournament,
        WHERE region = ${tRegion}
        ORDER BY startDate DESC`);

        return tournamentList;

    } catch {
        console.log(error);
    }
}

module.exports = {
    TournamentList
}