let express = require('express');

const router = express.Router();

router.get('/',function(req, res, next) {
    res.json({"massage":"authenticate"});
});

module.exports = router;