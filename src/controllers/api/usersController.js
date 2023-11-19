const { log } = require('console');
const { User } = require('../../database/models');
const { Usercategory } = require('../../database/models');

const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const fs = require('fs');


const controllers = {
    users: async (req, res) => {
        const users = await User.findAll({
            attributes: ['user_id', 'first_name', 'last_name', 'category_id', 'email'],
            include: [{ model: Usercategory, as: 'usercategorys' }],
            raw: true
        });

        const usersAPI = users.map((users) => {
            return {
                id: users.user_id,
                name: users.first_name + " " + users.last_name,
                email: users.email,
                detail: 'http://localhost:3001/api/users/' + users.user_id,
            }
        });

        const category_admin = await User.findAll({
            where: {
                category_id: 1
            }
        });

        const category_guest = await User.findAll({
            where: {
                category_id: 2
            }
        });

        res.json({
            status: 200,
            count: users.length,
            countByCategory: [
                { Administrador: category_admin.length },
                { Invitado: category_guest.length },
            ],
            users: usersAPI,
        });
    },
    userDetail: async (req, res) => {
        try {
            const selectedUser = await User.findByPk(req.params.id, {
                attributes: ['user_id', 'first_name', 'last_name', 'email', 'image', 'category_id',],
                include: [{ model: Usercategory, as: 'usercategorys' }],
                raw: true,
                nest: true
            });

            if (!selectedUser) {
                return res.status(404).send('Usuario no encontrado');
            }

            if (selectedUser.category_id === 1) {
                selectedUser.category_id = "admin"
            } else {
                selectedUser.category_id = "guest"
            }

            const imgURL = `http://localhost:3001/api/users/${req.params.id}/image`;

            const userAPI = {
                id: req.params.id,
                name: selectedUser.first_name,
                lastName: selectedUser.last_name,
                category: selectedUser.category_id,
                email: selectedUser.email,
                img: imgURL,
            };



            res.json({
                status: 200,
                user: userAPI,

            })


        } catch (error) {
            console.log(error);
        }
    },
    userImage: async (req, res) => {
        try {
            const selectedUser = await User.findByPk(req.params.id, {
                attributes: ['image'],
                raw: true,
                nest: true,
            });

            if (!selectedUser) {
                return res.status(404).send('Usuario no encontrado');
            }

            //Acciones necesarias para decodificar imagen
            const imgBuffer = Buffer.from(selectedUser.image, 'base64');
            res.contentType('image/png');
            res.send(imgBuffer);

        } catch (error) {
            console.error(error);
        }
    }
}


module.exports = controllers;