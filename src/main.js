const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const routes = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));

//middlewere Xử lí dữ liệu (Body)từ From submit lên sever
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//XMLHttpRequest, fetch, axios, 

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
    extname : '.hbs',
}));
// app.engine('handlebars', handlebars.engine({defaultLayout : 'main'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('_dirname: ' + __dirname);

//route init
routes(app);

app.listen(port, () => { console.log(`Example app listening on port localhost:${port}`)})
// 127.0.0.1 - localhost
