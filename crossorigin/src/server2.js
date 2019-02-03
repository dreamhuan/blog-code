const express = require('express');
const app = express();
const path = require('path');

app.listen(8081)

app.get('/iv1/hello', (req, res, next) => {
    res.send('hello server 2')
})

app.get('/iv1/jsonp', (req, res, next) => {
    const funName = req.query.funName
    const data = {
        a: 1,
        b: [1, 2]
    }
    res.send(`${funName}(${JSON.stringify(data)})`)
})