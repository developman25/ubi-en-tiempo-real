//conexion bd
	var mysql = require('mysql');

module.exports ={

		// Variables de usuario
	

	getSignUp : function(req,res,next){
		return res.render('/index');
	},

	postSignUp : function(req,res,next){
		var username = null;
		var $form = $('form');
		var user = {
			username : req.body.username
		};
		var config =require('.././database/config');
		var db = mysql.createConnection(config);
		
		// conectamos la DB

		db.connect();
		
		// insertamos los valores enviados desde el formulario
		db.query('INSERT INTO usuario SET ?', user, function(err, rows, fields){
			if(err) throw err;
			db.end();
		});

	},
}