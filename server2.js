var express = require('express');
var app = express();
var path = require('path');
var port = 3005;

app.set('port',port);
    app.use('/', express.static(path.join(__dirname, 'lib')));
    app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
    });

app.listen(app.get('port'), function () {
    console.log(`Server running on http://localhost:${port};
        From ${path.join(__dirname, 'public')};`
        );
    });


