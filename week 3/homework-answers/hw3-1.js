var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/school';

mongoClient.connect(url, function(err, db){
	var coll = db.collection('students');
	var cursor = coll.find({});
	cursor.each(function(err, doc){
		var lowest = Math.min.call(null, doc.scores[2].score, doc.scores[3].score);
		coll.update({_id: doc._id}, {$pull: {scores: {score: lowest}}});
	});
});

//  verifying query
//  db.students.aggregate( { '$unwind' : '$scores' } ,
// { '$group' : { '_id' : '$_id' , 'average' : { $avg : '$scores.score' } } } ,
// { '$sort' : { 'average' : -1 } } , { '$limit' : 1 } );

// answer: 13
// TODO: add error handling
