/**
 * Created by Ivo on 1/5/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/chat', function(req, res){

    res.render('chat', {
        pageTitle: 'Chat',
        pageID: 'chat'
    });
});

module.exports = router;