const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TOKENSchema = new Schema({
  access_token: { type: String },
  expires_time: { type: Number ,default: 0},
  appid: { type: String }
});

var TOKEN = mongoose.model('TOKEN', TOKENSchema)

// 暴露接口
module.exports = TOKEN;

