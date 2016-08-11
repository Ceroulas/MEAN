module.exports = function(app) {
	// server routes ===========================================================
	var db = require('../config/db')

	app.post('/add', function(req, res){
		
		/*db.userCollection.find().toArray(function(err, results) {
  			console.log(results)
		});/*
		db.collection('user').save(req.body, (err, result) => {
    		if (err) return console.log("AQUI")

 	 	  	console.log('saved to database')
    		res.redirect('/')
  		})*/
  	});	

  	app.get('/crud', (req, res) => {
  		db.userCollection.find().toArray((err, result) => {
    		if (err) return console.log(err)
    		// renders index.ejs
    		res.render('index.ejs', {quotes: result})
  		})
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};