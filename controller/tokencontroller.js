require('../db/index');
var Token = require('../models/token.model');



const add = async v => await v.save().catch((error)=>console.log(error));
const findByID = async (id) => await Token.findById({appid:id}).catch((error)=>console.log(error));
const findByAppID = async (appid) => await Token.findOne({appid:appid}).catch((error)=>console.log(error));
const findAndUpdate = async (appid,updateobj) => await Token.findOneAndUpdate({appid:appid},updateobj).catch((error)=>console.log(error));
const getLimit = async (num) => await Token.find({}).limit(num).catch((error)=>console.log(error)); 
const delByID = async (id) => await Token.deleteOne({ _id: id }).catch((error)=>console.log(error));

module.exports = {add,findByID,getLimit,delByID,findByAppID,findAndUpdate};

/*多条件联合模糊查询
const keyword = this.params.keyword //从URL中传来的 keyword参数
const reg = new RegExp(keyword, 'i') //不区分大小写
const result = yield User.find(
    {
        $or : [ //多条件，数组
            {nick : {$regex : reg}},
            {email : {$regex : reg}}
        ]
    },
    {
        password : 0 // 返回结果不包含密码字段
    },
    {
        sort : { _id : -1 },// 按照 _id倒序排列
        limit : 100 // 查询100条
    }
)

*/