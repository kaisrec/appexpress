var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
var qry ='';
    app.set('port',port);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.use('/', express.static(path.join(__dirname, 'lib')));
    app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res,next){
    res.render('index');
    next();
    });

app.get('/', function(req, res){
    console.log(req.query.name);
})

app.listen(app.get('port'), function () {
    console.log(`Server1 running on http://localhost:${port};
        From ${path.join(__dirname, 'public')};`
        );
    });


