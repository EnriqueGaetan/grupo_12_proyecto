const express = require ('express');
const colorControllers = require('../controllers/colorControllers');

const router = express.Router();

//@GET - /color
router.get('/', colorControllers.getAll);

module.exports = router;