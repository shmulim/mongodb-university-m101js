var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/weather';
var varState = null;

MongoClient.connect(url, function(err, db){
	if (err) throw err;

	var coll = db.collection('data');
	var cursor = coll.find({}, {_id: true, State: true, Temperature: true});
	
	cursor.sort({State: 1, Temperature: -1});

	cursor.forEach(function(doc){
		if (doc.State !== varState){
			varState = doc.State;

			coll.update({'_id': doc._id}, {$set: { month_high: true}});
		}
	});
});
