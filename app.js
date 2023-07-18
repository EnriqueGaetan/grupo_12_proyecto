const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () =>
    console.log("Servidor corriendo en el puerto 3000"));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/navfooter.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/carritodecompras', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carritocompras.html'));
});

app.get('/detalleproducto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productdetail.html'));
});

app.get('/productcart', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productcart.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

