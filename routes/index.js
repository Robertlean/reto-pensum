var express = require('express');
var router = express.Router();
const {index, muestra} = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/muestra', muestra)

module.exports = router;
