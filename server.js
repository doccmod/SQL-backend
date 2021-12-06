const express = require("express");
const cors = require("cors");
const userOps = require("./dbFiles/tables/userOperations");
const User = require("./dbFiles/config/user");

const API_PORT = process.env.PORT || 3001;
const app = express();

var corsOptions = {
    origin: "http://localhost:3002"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get("/api", (req, res) => {
    res.json({message: "Hello API"});
});

// let test = new User('lesgo', 'adkslmgia', 'gfjdhg');

// userOps.createUser(test);

userOps.getUsers().then(res =>{
    console.log(res);
})

app.listen(API_PORT, () => {
    console.log(`listening on port ${API_PORT}`);
})