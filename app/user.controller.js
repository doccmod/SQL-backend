const User = require("../models/user.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {

    if(!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    const user = new modelUser({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published || false
    });

    user.create(User, (err, data => {
        if(err) 
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating the User."
            });
        else res.send(data);
    });
};

