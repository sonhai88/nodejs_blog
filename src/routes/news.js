const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsController');

//newController == Function

router.use('/:slug', newsController.show);

router.use('/', newsController.index);

// / : Cho Xuong Duoi

module.exports = router;