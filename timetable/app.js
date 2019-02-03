// 引入path
const path = require('path');
// 引入express
const express = require('express');
// 实例化express
const app = express();
// 引入body-parser
const bodyParser = require('body-parser');
// 引入别的路由模块
const index = require('./routes/index');
const user = require('./routes/user');
const timetable = require('./routes/timetable');

// 解析json格式的post请求体，给req添加body属性
app.use(bodyParser.json());
// 中间件只解析urlencoded 请求体，并返回，只支持UTF-8编号文本
// extend
// ture->使用queryString库（默认） false->使用qs库。
app.use(bodyParser.urlencoded({ extended: false }));

// 设置静态资源路径，express自动处理get请求
app.use(express.static(path.join(__dirname, 'public')));


// app访问预处理中间件
// 设置跨域请求许可以及返回内容的数据格式
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); //允许哪些url可以跨域请求到本域
    res.setHeader("Access-Control-Allow-Methods", "GET,POST"); //允许的请求方法，一般是GET,POST,PUT,DELETE,OPTIONS
    res.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type,Token"); //允许哪些请求头可以跨域

    next();
});

app.use('/', index);
app.use('/user', user);
app.use('/timetable', timetable);

app.use(function (req, res, next) {
    res.send('404 NOT FOUND！')
});

module.exports = app;