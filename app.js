var express = require('express');
//libreria para refrescar el navegador automaticamente
//var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
var io = require('socket.io')();

app.set('port', process.env.PORT || 8080);
app.set('appData', dataFile);
app.set('view engine','ejs');
app.set('views', 'app/views');

//Variable global
app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;


app.use(express.static('app/public'));
app.use(require('./routes/index'), function(req, res, next){
    next();
});
app.use(require('./routes/speakers'), function(req, res, next){
    next();
});
app.use(require('./routes/feedback'), function(req, res, next){
    next();
});
app.use(require('./routes/api'), function(req, res, next){
    next();
});

app.use(require('./routes/chat'), function(req, res, next){
    next();
});


var server = app.listen(app.get('port'), function(){
    console.log('Listening on port '+ app.get('port'));
});

io.attach(server);
io.on('connection', function(socket){
    socket.on('postMessage', function(data){
       io.emit('updateMessages', data);
    });
});


//libreria para refrescar el navegador automaticamente
//reload(server, app);