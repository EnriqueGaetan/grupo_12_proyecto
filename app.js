const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
app.use(methodOverride('_method'));



const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');


app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/partials'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users'),
]);


app.listen(3000, () =>
    console.log("Servidor corriendo en el puerto 3000"));



