
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const x = req.query.x || (Math.random() );
    const result = Math.asin(x);

    const response = `Math.asin() applied to ${x} is ${result}`;
    res.render('computation', { title: 'Computation Result', result: response });
});


module.exports = router;
