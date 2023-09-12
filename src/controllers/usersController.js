const { validationResult } = require('express-validator');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const controllers = {
    register: (req, res) => {
        const errors = req.body.errors;
        res.render('register', { errors })

    },

    registerPost: (req, res) => {
        console.log(req.files);
        const filenames = req.files.map(file=>file.filename);
        console.log(filenames);

        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            image: filenames,
        }

        const user = userModel.create(newUser);
        if (user.error) {
            res.redirect('/users/register?error=' + user.error);
        } else {
            res.redirect('/');
        }



    },


    login: (req, res) => {
        const error = req.query.error;
        res.render('login', { error });
    },

    logout: (req,res) => {
        res.clearCookie('email');

        req.session.destroy();
        res.redirect('/');        
    },

    loginPost: (req,res) => {
        const userInJson = userModel.findByEmail(req.body.email);

        if (!userInJson) {        
            return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }

        const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

        if (validPw) {
            if(req.body.remember === "on"){
                res.cookie('email', userInJson.email, { maxAge: 1000 * 60 * 60 * 24 * 365});
                console.log('recordar');
            } else {
                console.log('No se quiere mantener la sesión iniciada');
            }
            req.session.user = userInJson;
            res.redirect('/');

        } else {
            res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }
    }



}

module.exports = controllers;