    var posts = db.collection("posts");
    
    posts.createIndex({'date': 1}, function(err){
        if (err) throw err;
    });

     posts.createIndex({'permalink': 1}, function(err){
        if (err) throw err;
    });

    posts.createIndex({'tags': 1}, function(err){
        if (err) throw err;
    });
