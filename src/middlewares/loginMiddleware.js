const { body, validationResult } = require('express-validator');

const loginMiddleware = [
    body('email')
      .isEmail().withMessage('El dato ingresado no es un correo electrónico válido')
      .notEmpty().withMessage('El campo de correo electrónico no puede estar vacío'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña'),

  ];
  
module.exports = loginMiddleware;

