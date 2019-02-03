const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/time_table');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', console.log.bind(console, 'connection success:'));

exports.mongoose = mongoose;