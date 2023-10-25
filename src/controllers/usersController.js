const { validationResult } = require('express-validator');
const { User } = require('../database/models');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');


const controllers = {
    register: (req, res) => {
        const errors = req.body.errors;
        res.render('register', { errors })

    },

    registerPost: async (req, res) => {

        const uploadedFile = req.file;
        let imageBlob; 

        if (req.file === undefined) {
            const imagePath = path.join(__dirname, '../../public/images/userimage.png');
            imageBlob = Buffer.from(fs.readFileSync(imagePath), 'binary');

        }  else {
            const imageBuffer = fs.readFileSync(uploadedFile.path);
            imageBlob = Buffer.from(imageBuffer, 'binary');
            console.log(imageBlob)
        }
        
        

        const newUser = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            category_id: "2", // Por defecto los usuarios son registrados como invitados.
            password: req.body.password,
            image: imageBlob,
        }

        newUser.password = bcrypt.hashSync(newUser.password, 12);



        const errors = validationResult(req);

        console.log(errors);

        if (errors.isEmpty()) {

            


            try {
                const registerUser = await User.create(newUser);
                return res.redirect('/');
    
            } catch (error) {
                return res.render('register', { errors: errors.mapped(), old: req.body });

            }               
        } else {
            return res.render('register', { errors: errors.mapped(), old: req.body });
        };  


    },


    login: (req, res) => {
        const loginErrors = req.query.error;

        res.render('login', { loginErrors });
    },


    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        res.redirect('/');
    },

    loginPost: (req, res) => {
        const userInJson = userModel.findByEmail(req.body.email);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            req.session.loginErrors = errors.array();
            return res.render('login', { errors: errors.array() });
        };


        if (!userInJson) {
            return res.render('login', { loginErrors: [{ msg: 'Usuario no encontrado' }] });
        }

        const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

        if (validPw) {
            if (req.body.remember === "on") {
                res.cookie('email', userInJson.email, { maxAge: 1000 * 60 * 60 * 24 * 365 });
                console.log('recordar');
            } else {
                console.log('No se quiere mantener la sesión iniciada');
            }
            req.session.user = userInJson;
            console.log(req.session.user);
            res.redirect('/');
        } else {
            return res.render('login', { loginErrors: [{ msg: 'El correo o la contraseña son incorrectos' }] });
        }
    }
    ,
    edit: async (req, res) => {
        const id = req.params.id;

        try {
            const user = await User.findByPk(req.params.id, {
                raw: true,
                nest: true
            });

            res.render('UserEdit', { user });

        } catch (error) {
            console.log(error);
        }
    },
    updateUser: async (req, res) => {

        console.log(req.files);

        const filenames = req.files.map(file => file.filename);

        console.log(filenames)
        let updateUser = {
            user_id: Number(req.params.id),
        };

        updateUser = {
            ...updateUser,
            ...req.body,
            img: filenames

        };


        try {
            await User.update(updateUser, {
                where: {
                    user_id: req.params.id
                }
            })


        } catch (error) {
            console.log(error);
        }
        res.redirect('/');
    },

    detail: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id, {
                raw: true,
                nest: true
            });

            res.render('userDetail', { user });

        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = controllers;