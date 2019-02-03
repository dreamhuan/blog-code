const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

app.listen(8080)

app.use(express.static(path.join(__dirname, './public')))

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*')
//     next()
// })

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); //允许哪些url可以跨域请求到本域，*表示全部
    res.setHeader("Access-Control-Allow-Methods", "GET, POST"); //允许的请求方法，一般是GET,POST,PUT,DELETE,OPTIONS
    res.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type,Token"); //允许哪些请求头可以跨域
    next();
});

app.get('/iv1/hello', (req, res, next) => {
    res.send('hello server 1')
})


app.get('/iv1/proxy', (req, res, next) => {
    http.get('http://www.bbb.com:8081/iv1/hello', function (_req, _res) {
        let data = '';
        _req.on('data', function (chunk) {
            data += chunk;
        });
        _req.on('end', function () {
            res.send(data);
        });
    });
})