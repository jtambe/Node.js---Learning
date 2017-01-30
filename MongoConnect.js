

var MongoClient  =  require('mongodb').MongoClient,format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017',function(err,db){

	if(err){
		throw err;
	}
	else{
		console.log("connected");
	}

	db.close();

});

//1. traverse the path where this file is located
//2. npm link mongodb  -- to connect mongodb to that directory
