/**
 * Created by Ivo on 1/5/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/feedback', function(req, res){

    res.render('feedback', {
        pageTitle: 'Feedback',
        pageID: 'feedback'
    });
});

module.exports = router;