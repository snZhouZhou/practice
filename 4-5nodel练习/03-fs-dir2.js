'use strict'

const fs=require ('fs');
const path=require('path');

const oldDirPath=path.join(__dirname,'aaa');

// fs.mkdir(oldDirPath,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('mk dir success');

// })

fs.exists(oldDirPath,(exists)=>{
    if(!exists){
        fs.mkdir(oldDirPath,(err)=>{
            if(err){
                console.log(err);
            }
            console.log('mk dir success');
        })
    }else{
        console.log("文件夹已经存在");
    }
})

const newDirPath=path.join(__dirname,'bbb');

fs.rename(oldDirPath,newDirPath,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('rename success');
})