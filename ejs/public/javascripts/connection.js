var MongoClient = requier('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("create db");
    db.close();
})