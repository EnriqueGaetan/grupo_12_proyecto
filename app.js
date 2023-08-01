const express = require('express');
const app = express();
const path = require('path');

const mainRoutes = require('./routes/mainRoutes');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/', mainRoutes);
app.set('view engine','ejs');

app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/partials'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users'),
]);


app.listen(3000, () =>
    console.log("Servidor corriendo en el puerto 3000"));



