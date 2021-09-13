let auth = require('./auth');
let users = require('./users');
let express = require('express');

const router  = express.Router();

router.use('/auth', auth);

router.use('/users', users);

router.get('/', function(req, res,next)  {
    res.status(200).json({ message: 'Home' });
});

router.use(function(req, res) {
    return res.status(404).send({
        success: false,
        message: 'Resource not found.'
    });
});

router.use(function(req, res) {
    return res.status(404).send({
        success: false,
        message: 'Resource not found.'
    });
});

module.exports = router;