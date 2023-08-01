const express = require('express');

const app = express();

const mainRoutes = require('./routes/mainRoutes');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/', mainRoutes);


app.listen(3000, () =>
    console.log("Servidor corriendo en el puerto 3000"));



