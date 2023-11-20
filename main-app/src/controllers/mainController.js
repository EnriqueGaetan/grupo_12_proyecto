const { log } = require('console');
const { User } = require('../database/models');
const { Op } = require('sequelize');

const controllers = {
    home: (req, res) => {
        res.render('home', { user: req.session.user });
    },
    controlpanel: async (req, res) => {
        try {
            const allUsers = await User.findAll({ raw: true });


            res.render('controlpanel', { allUsers });

        } catch (error) {
            console.log(error);
        }
    }
}



    

module.exports = controllers;