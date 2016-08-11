var Db=require('mongodb').Db;
var BSON=require('mongodb').BSONPure;
var Server=require('mongodb').Server;

client=new Db('login_mean' , new Server('127.0.0.1',27017),{safe:false});

module.exports.connectDatabase = function(callback){
	//url : 'mongodb://localhost:27017/login_mean'
	client.open(function(err,pClient)
   {
       if(err){
         console.log(err);
         process.exit(1);
       }

       module.exports.userCollection = pClient.collection('user');
       callback();
   });
}