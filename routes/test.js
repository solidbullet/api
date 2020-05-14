const dbuser = require('../controller/usercontroller')
const dbtoken = require('../controller/tokencontroller')
var User = require('../models/user.model');
var Token = require('../models/token.model');
const util = require('./util.js')

util.getToken().then(res =>{
  console.log(res)
})
let user = new User({
    username:"jyq",
    password:123
})
let token =  {
  access_token:'',
  expires_time:0
}
var {username,password} = {"username":"jyq","password":123};
// dbtoken.add(token).then(res =>{
//     console.log(res)
// })
// dbtoken.delByID('5ebc16449e2aad0a00cbf0de').then(res =>{
//   console.log(res)
// })
// dbtoken.findAndUpdate('wxe63ceee0389b505d',token).then(res =>{
//   console.log(res)
// })

// dbtoken.findByAppID('wxe63ceee0389b505d').then(res =>{
//   console.log(res)
// })
// dbtoken.findByID('5ebc14baacf557341016f87f').then(res =>{
//   console.log(res)
// })