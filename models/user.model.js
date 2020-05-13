const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const USERSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String , required: true},  
  createdAt: { type: Date, default: Date.now }
});

var USER = mongoose.model('USER', USERSchema)

// 暴露接口
module.exports = USER;

