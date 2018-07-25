/*const express = require('express');*/

var express = require('express');
var app = express();

var path = require('path');
var engines = require('consolidate')
var RUN_PORT = 8080;


app.set('views', __dirname + '/views');
app.engine('json', require('ejs').renderFile);
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));


//index.html routing
app.get('/', function(req, res){
    res.render("welcome.html");
});

/*app.get('/', (req, res) => {
   res.send('<h1>Welcome!</h1>');

});*/


/*
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});*/


/*app.listen(8080, () => {
  console.log('Server is up on port 8080');
});*/


//error.html routing
app.get('/error', function(req, res){
    res.render("error.html");
});

//showing that the program is running on the RUN_PORT
app.listen(RUN_PORT, function(){
    console.log("Running on port " + RUN_PORT);
});




