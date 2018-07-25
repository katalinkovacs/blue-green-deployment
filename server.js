const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var RUN_PORT = 8080;


app.set('views', __dirname + '/views');
app.engine('json', require('ejs').renderFile);
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));


//some.html routing
app.get('/', function(req, res){
    res.render("green.html");
});


//error.html routing
app.get('/error', function(req, res){
    res.render("error.html");
});

//showing that the program is running on the RUN_PORT
app.listen(RUN_PORT, function(){
    console.log("Running on port " + RUN_PORT);
});




