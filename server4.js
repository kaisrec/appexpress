var express = require('express');
var path = require('path');
var app = express();
var bodyParser  = require('body-parser');

app.use(bodyParser());

var monsters = [ {nom:'Albert', level:5, desc:'la vipère'    },
                {nom:'Pilou',  level:4, desc:'le loup garou'},
                {nom:'Mounir', level:2, desc:'le vampire'   }];


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname ,'/public/hello.html'));
});

app.use('/', express.static(path.join(__dirname,'public')));
app.use('/', express.static(path.join(__dirname, 'lib')));

app.post('/add', function(req, res) {
    monsters.push({
       nom : req.query.nom,
       desc: req.query.desc,
       level:parseInt(req.query.level) 
    });
    console.log(req.body);
    res.send('Ok');
});

app.get('/:id', function(req, res) {
res.send(`Nom : ${monsters[req.params.id].nom}
Niveau: ${monsters[req.params.id].level}
Description: ${monsters[req.params.id].desc}`);
});

app.listen(3004, function(){
    console.log('Server 4 is Running on prot 3004');
});