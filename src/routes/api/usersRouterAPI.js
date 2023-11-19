const express = require('express');
const usersController = require('../../controllers/api/usersController');
const router = express.Router();
const path = require('path');


router.get('/', usersController.users);
router.get('/:id',usersController.userDetail);
router.get('/:id/image',usersController.userImage);


module.exports = router; 
