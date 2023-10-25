const { body, validationResult } = require('express-validator');
const path = require('path');


const registerMiddleware = [
  body('firstName')
    .notEmpty().withMessage('Debe ingresar su nombre')
    .isLength({ min: 2 }).withMessage('El nombre debe al menos 2 caracteres'),
    body('lastName')
    .notEmpty().withMessage('Debe ingresar su apellido')
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('email')
    .notEmpty().withMessage('Debe ingresar su dirección de correo electrónico')
    .isEmail().withMessage('Ingrese una dirección de correo electrónico válida'),
    body('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),




  body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
    if (file) {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error('Extensiones permitidas: jpg, png, jpeg, gif');
      }
    } else {
      throw new Error('Debés seleccionar una imagen');
    }
    return true;
  })
];

module.exports = registerMiddleware;