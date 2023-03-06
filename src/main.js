const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
    extname : '.hbs',
}));
// app.engine('handlebars', handlebars.engine({defaultLayout : 'main'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log('_dirname: ' + __dirname);

//route middleware
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/:news', function (request, response) {
    response.render('news');
});

app.get('/:flutter', function (req, res) {
    res.render('home');
});

app.listen(port, () => { console.log(`Example app listening on port localhost:${port}`)})


// 127.0.0.1 - localhost


//119028851+sonhai88@users.noreply.github.com