'use strict'

//1 连接mongodb 目的拿到里面的db对象

const mongoClient = require ('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/info';

mongoClient.connect(url,(err,db)=>{
    //拿到集合
    var collection=db.collection('info');
   
   //新增多个文档
   collection.insertMary([
       {
           foodname:'泡椒凤爪',
           price:3
       },
       {
           foodname:'好吃的',
           price:300
       }
   ],function(err,result){
       if(err){
           console.log(err);
       }
       console.log('插入成功');
   })

   //新增一个文档
   collection.insertOne({
       foodname:'北京烤鸭',
       price:185
   },function(err,result){
       if(err){
           console.log(err);
       }
       console.log('插入成功');
   })

   //修改一条
    collecton.updateOne({foodname:'鸭霸王'},
      {$set:{price:299}},(err,result)=>{
          if(err){
              console.log(err);
          }
          console.log('success');
      })

    //修改多条文档
    collection.updateMany({foodname: {$regex:'鸭'}},
    {$set:{price:666}},
    (err,result)=>{
        if(err){
            console.log(err);
        }
        console.log('success');
    })

    //删除
    collection.deleteOne({foodname:'北京烤鸭'},(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log('删除成功');
    })

    collection.deleteMany({foodname:{$regex:'鸭'}},(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log('删除成功');
    })

    //查询
    collection.findOne({foodname:'新疆切糕'},(err,doc)=>{
        console.log(doc);
    })

    //查询多个
    collection.find({
        foodname:{$regex:'糕'}
    }).toArray(function(err,docs){
        console.log(docs);
    })

    //分页查询
    collection.find().skip(0).limit(2).toArray(function(err,docs){
        console.log(docs);
    })
    db.close();
})
