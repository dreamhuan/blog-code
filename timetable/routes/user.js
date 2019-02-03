const express = require('express');
const router = express.Router();

const User = require('../model/User').User;

router.post('/login', function (req, res, next) {
    User.findOne(req.body, function (err, user) {
        if (err) {
            console.log(err);
            res.send('数据库错误');
            return;
        }
        if (user) {
            res.send('登陆成功!');
        } else {
            res.send('账号或密码错误!');
        }
    });
});

router.post('/register', function (req, res, next) {
    console.log(req.body);
    User.findOne({'name': req.body.name}, function (err, user) {
        if (err) {
            console.log(err);
            res.send('数据库错误');
            return;
        }
        if (user) {
            res.send('用户已存在');
        } else {
            //根据定义的model新建一个对象并保存，第二个参数是保存成功后的回调函数
            const user = new User(req.body);
            user.save(function (err, user) {
                if (err) return console.error(err);
                console.log(user);
                res.send('登陆成功!');
            });
        }
    });
});

module.exports = router;