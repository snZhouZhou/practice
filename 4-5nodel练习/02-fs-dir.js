'use strict'

const fs=require('fs')
const path=require('path')

const dirPath=path.join(__dirname,'aaa');
//创建文件夹
// fs.mkdir(dirPath,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('make dir success');
// })

//判断文件夹是否已经存在
// fs.exists(dirPath,(exists)=>{
//     if(!exists){
//         fs.mkdir(dirPath,(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             console.log('make dir success');
//         })
//     }else{
//         console.log('文件夹已经存在');
//     }
// })


//删除文件夹
fs.exists(dirPath,(exists)=>{
    if(exists){
        fs.rmdir(dirPath,(err)=>{
            if(err){
                console.log(err);
            }
            console.log('remove dir success');
        })
    }else{
        console.log('文件夹已经不存在了');
    }
})