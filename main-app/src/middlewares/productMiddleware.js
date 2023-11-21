const { body, validationResult } = require('express-validator');
const path = require('path');


const productMiddleware = [
  body('name')
    .notEmpty().withMessage('Debe ingresar el nombre del producto')
    .isLength({ min: 5 }).withMessage('El nombre debe tener mas de 5 caracteres'),
  body('description')
    .notEmpty().withMessage('Debe ingresar la descripción del producto')
    .isLength({ min: 20 }).withMessage('La descripción debe tener mas de 20 caracteres'),
  body('category')
    .notEmpty().withMessage('Debe selecionar una categoría'),
  body('color')
    .notEmpty().withMessage('Debe selecionar un color'),
  body('options')
    .notEmpty().withMessage('Debe selecionar una opción'),
  body('price')
    .notEmpty().withMessage('Debe informar un precio'),

  body('img').custom((value, { req }) => {
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

module.exports = productMiddleware;