const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.send('<h1 style="color: red">hello express</h1>');
});

module.exports = router;