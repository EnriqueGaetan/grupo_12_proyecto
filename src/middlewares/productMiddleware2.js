  const { body, validationResult } = require('express-validator');
  const path = require('path');


  const productMiddleware2 = [
    body('name')
      .notEmpty().withMessage('Debe ingresar el nombre del producto')
      .isLength({ min: 5 }).withMessage('El nombre debe tener mas de 5 caracteres'),
    body('description')
      .isLength({ min: 20 }).withMessage('La descripción debe tener mas de 20 caracteres'),
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

  module.exports = productMiddleware2;