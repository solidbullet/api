const db = require('./crud')
var User = require('../models/user.model');
let user = new User({
    username:"jyq",
    password:123
})
var {username,password} = {"username":"jyq","password":123};
// db.add(user).then(res =>{
//     console.log(res)
// })
  db.findUser(username,password).then(res =>{
console.log(res)

})


