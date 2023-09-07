const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const controllers = {
    register: (req, res) => {
        return res.render('register');
    },

    registerPost: (req, res) => {
        console.log(req.files);
        const filesnames = req.files.map(file=>file.filename);
        console.log(filenames);

        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            image: filenames,
        }

        const user = userModel.create(newUser);

        res.send("OK");

    },


    login: (req, res) => {
        return res.render('login');
    },


}

module.exports = controllers;