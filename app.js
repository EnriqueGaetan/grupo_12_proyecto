const express = require('express');
const methodOverride = require('method-override');
const mainRouter = require('./src/routes/mainRouter');
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const userLog =  require('./src/middlewares/userLog');
const cookiesMiddleware = require('./src/middlewares/cookiesMiddleware');



const app = express();

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './src/views/main'),
    path.join(__dirname, './src/views/partials'),
    path.join(__dirname, './src/views/products'),
    path.join(__dirname, './src/views/users'),
]);

app.use(session({ secret: 'Pintur!!', resave: false, saveUninitialized: true}));
app.use(cookieParser());

app.use(cookiesMiddleware);

app.use(userLog);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());


app.use(methodOverride('_method'));





// app.use((req, res, next) => {
//     // Si hay una cookie guardada con el email de un usuario
//     if(req.cookies.email){
//         const userModel = require('./src/models/userModel');

//         // Mediante el modelo vamos a buscar los datos del usuario
//         const user = userModel.findByEmail(req.cookies.email);

//         // Guardamos en session los datos del mismo
//         req.session.user = user;
//     }
//     // Si no hay cookie de email, no hacemos nada
//     next();
// });




app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



app.listen(3001, () =>
    console.log("Servidor corriendo en el puerto 3001"));



