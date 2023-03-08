const siteRouter = require('./sites');

const newsRouter = require('./news');

//route middleware
function routes(app) {

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

}

module.exports = routes;



  