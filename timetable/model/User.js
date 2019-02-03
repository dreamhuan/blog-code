//导入已经连接好数据库的mongoose库
const mongoose = require('../config/config').mongoose;

//定义User这个"表"，noSQL术语叫做集合(collection)，调用mongoose.model并传入第一个参数是model名，第二个是表的结构
//其中第二个参数作为表的结构使用mongoose.Schema定义，具体内容官网都有详细的文档。（比如数据类型之类的）
//第三个参数是集合名，省略的话默认会使用第一个参数的全小写的复数形式（所以这个例子写不写都一样）
const userSchema = mongoose.Schema({
    name: String,
    pwd: String,
});
const User = mongoose.model('User', userSchema, 'users');
// const User = mongoose.model('User', userSchema); 和上面一行效果一样
// const User = mongoose.model('User', userSchema, 'user'); 这么写集合名就是user了

exports.User = User;