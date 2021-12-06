const User = require("./user.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {

    if(!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    User.create(user, (err, data) => {
        if(err) 
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating the User."
            });
        else res.send(data);
    });
};

