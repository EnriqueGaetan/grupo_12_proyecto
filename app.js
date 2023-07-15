const express = require ('express');
const path = require('path');
const app = express();

app.listen (3000, () =>
console.log ("Servidor corriendo en el puerto 3000"));

app.use(express.static('public'));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './views/navfooter.html'));
});