// 引入http模块
const http = require('http');
// 引入app模块
const app = require('../app');
// 定义端口常量
const PORT = 8080;
// 用express的实例app创建一个服务
const server = http.createServer(app);
// 监听8080端口
server.listen(PORT);
// 绑定成功监听端口事件
server.on('listening', () => {
    console.log('connect to port ' + PORT);
});
// 绑定错误事件
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

