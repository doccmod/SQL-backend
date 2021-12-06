// Required libraries
const express = require("express");
const cors = require("cors");

// Required file dependencies
const userOps = require("./dbFiles/tables/userOperations");
const User = require("./dbFiles/config/user");

// Setting up the port 3001 and creating the app
const API_PORT = process.env.PORT || 3001;
const app = express();

// cors port at 3002
var corsOptions = {
    origin: "http://localhost:3002"
};

// Uses cors, and express json/urlencoded
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Shows hello api on 127.0.0.1:3001/api
app.get("/api", (req, res) => {
    res.json({message: "Hello API"});
});

// Creates a test user and adds it to the database
let testUser = new User('Joe', 'joe@gmail.com', 'abcd');
userOps.createUser(testUser);

// Outputs all users to the console
userOps.getUsers().then(res =>{
    console.log(res);
})

// Listens on port 3001
app.listen(API_PORT, () => {
    console.log(`listening on port ${API_PORT}`);
})