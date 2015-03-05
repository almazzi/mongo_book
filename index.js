/**
 * Created by Almaz on 05.03.2015.
 */
//Retrieve
var mongoClient = require('mongodb').MongoClient;
//Connect to the db
var data =[ {

    "kitepId" : 1,

    "avtoru" : "Aytmatov Ch.",

    "aty" : "Toolor kulaganda",

    "chykkan jyly" : 2010
},

    {

        "kitepId" : 2,

        "avtoru" : "Osmonov A.",
        "aty" : "Yssyk-kol",

        "chykkan jyly" : 1960}
];
mongoClient.connect("mongodb://localhost:27017/books",function(err, db){

    if(err)
   console.log(err);
    else{
       console.log("Connected to Mongo");
       mongoDBOj = {
           db:db,
           books: db.collection('books')
       };
       //mongoDBOj.books.find().toArray(function(err, result){
       //    if(err)
       //    console.log(err);
       //    else{
       //        console.log(result);
       //    }
       //});
        //update operation
        //mongoDBOj.students.update({"kitepId":2},{
        //    $set:{
        //        "avtoru":"Askat"
        //    },
        //$currentDate:{ lastModified:true}
        //}, function (err, res) {
        //        if(err)
        //        console.log(err);
        //    }
        //);

        // insert operation
        //mongoDBOj.books.insert(data,{w:1}, function (err, result) {
        //    if(err){
        //        console.log(err);
        //    }
        //    else{
        //        console.log("data inserted");
        //        console.log(result);
        //    }
        //});
        //remove operation
        //
        //retrieve operation
        mongoDBOj.books.find({"kitepId":2});

   }

});