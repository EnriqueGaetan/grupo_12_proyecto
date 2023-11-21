const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const userLog =  require('./src/middlewares/userLog');
const sessionMiddleware = require('./src/middlewares/sessionMiddleware');


const app = express();


// Rutas 
const mainRouter = require('./src/routes/mainRouter');
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');
const productsRouterAPI = require('./src/routes/api/productsRouterAPI');
const usersRouterAPI = require('./src/routes/api/usersRouterAPI');



app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './src/views/main'),
    path.join(__dirname, './src/views/partials'),
    path.join(__dirname, './src/views/products'),
    path.join(__dirname, './src/views/users'),
]);

app.use(session({ secret: 'Pintur!!', resave: false, saveUninitialized: true}));
app.use(cookieParser());

app.use(sessionMiddleware);

app.use(userLog);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());



app.use(methodOverride('_method'));
app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use('/api/users', usersRouterAPI);
app.use('/api/products', productsRouterAPI)


app.listen(3001, () =>
    console.log("Servidor corriendo en el puerto 3001"));

