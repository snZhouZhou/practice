'use strict'
  //引入模块
const http=require ('http');
const url=require ('url');
const querystring=require ('querystring');

//创建web服务器
const server=http.createServer();

//请求 处理 响应
server.on('request',(req,res)=>{
    //GET
    const urlString=req.url;
    if(!urlString.includes('/favicon.ico')){
        //获取地址
        const urlObj=url.parse(urlString);

        //将获取到的GET键值对的字符串转换成js对象行式 方便操作
        const paramsObj=querystring.parse(urlObj.query);
    };

    res.end('返回给你');
})

// server.on('request',(req,res)=>{
//     let body='';
//     req.on('data',(chunk)=>{
//         body+=chunk;
//     });
//     req.on('end',()=>{
//         const paramsObj=querystring.parse(body);
//     })
//     res.end('POST');
// })


//开启web服务 启动监听
server.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('start server ok');
})
