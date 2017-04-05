'use strict'

const fs= require ('fs');
const path = require('path');

// const filePath=path.join(__dirname,'123.txt');

// fs.writeFile(filePath,'123123123',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('write success');
// })
// //以追加的方式
// fs.appendFile(filePath,'\r\n456456456',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('追加成功');
// })

//往abc文件夹中的abc.txt中加入一句话
const dirPath=path.join(__dirname,'abc');
const filePath=path.join(__dirname,'abc/abc.txt');

//先判断是否有abc文件夹 没有创建 有就添加话
fs.exists(dirPath,(exists)=>{
    if(!exists){
        fs.mkdir(dirPath,(err)=>{
            if(err){
                console.log(err);
            }
            console.log('make dir success');
        })
    }else{
        console.log('文件夹已经存在了');
    }
})

fs.appendFile(filePath,'\r有添加了一句话',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('append success');
})

//重命名文件
const newFilePath=path.join(__dirname,'abc/ddd.txt');

fs.rename(filePath,newFilePath,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('rename success');
})

//删除文件
fs.exists(newFilePath,(exists)=>{
    if(exists){
        fs.unlink(newFilePath,(err)=>{
            if(err){
                console.log(err);
            }
            console.log('unlink success');
        })
    }else{
        console.log('文件不存在');
    }
})

//监控文件的改变
fs.watchFile(filePath,(cur,prev)=>{
    console.log(cur);
    console.log(prev);
    console.log(`this current mtime is :${cur.mtime}`);
    console.log(`this prevent mtime is :${pre.mtime}`);
})