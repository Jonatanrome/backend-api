const { User } = require("../models/users");

const controllers = {
    myIndex(req , res) {
        res.render('index', { title: 'Express' });
    },
    myUser(req,res) {
        res.json({
            name:"jonatan",
            age:27

        });
    },

    newUser: async (req, res) => {
        try{
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(501).json({
                msg:"no se puede guardar el usuario en la BD,ese mail ya existe",
                err,

            });

        }

    },

};
module.exports = controllers;