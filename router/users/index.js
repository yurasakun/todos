let items = require('./todoItem');
let express = require('express');
const router  = express.Router();


router.use('/:userId/items',items);

router.get('/', function(req, res,next){
  res.status(200).json({ message: 'user' });
});


module.exports = router;