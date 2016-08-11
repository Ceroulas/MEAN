// modules =================================================
var express        = require('express');
var app            = express();
var MongoClient    = require('mongodb').MongoClient;
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
app.set('view engine', 'ejs')	
// config files
var db= require('./config/db');

var port = process.env.PORT || 8080; // set our port
db.connectDatabase(function() {
   //here you can reuse collection like this
   db.userCollection

});
/*MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  db = database	
  app.listen(4000, () => {
    console.log('listening on 4000')
  })
});*/// connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user

exports = module.exports = app;

						// expose app