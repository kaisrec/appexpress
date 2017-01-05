var express = require('express');
var app = express();
var path = require('path');
var port = 3002;
var sdata =[];
    app.set('port',port);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.use('/', express.static(path.join(__dirname, 'lib')));

app.get('/',function(req,res,next){
    res.render('index');
    next();
    });

app.get('/', function(req, res){
    sdata.push(req.query.firstName); //JSON.stringify(
    console.log(sdata);
});

app.listen(app.get('port'), function () {
    console.log(`Server :3 running on http://localhost:${port};
        From ${path.join(__dirname, 'public')};`
        );
    });


