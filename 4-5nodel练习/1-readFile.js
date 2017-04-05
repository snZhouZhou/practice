'use strick'

const http=require ('http');
const fs=require('fs');

const server = http.createServer();

server.on('request',(req,res)=>{
    const urlString=req.url;

    if(urlString.includes('./index.html')){
        fs.readFile('./index.html','utf8',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }
})

server.listen(3000,'192.168.18.84',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('start server ok');
})