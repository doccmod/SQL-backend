const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "valT"
});

connection.connect(error =>{
    if(error) throw error;
    console.log("Database connection successful.");
});

module.exports = connection;