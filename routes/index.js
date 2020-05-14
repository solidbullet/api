const router = require('koa-router')()
const dbuser = require('../controller/usercontroller')
const dbtoken = require('../controller/tokencontroller')
const util = require('./util.js')

router.post('/login', async (ctx, next) => {
  let req = ctx.request
  var {username,password} = req.body;

  let res = await dbuser.findUser(username,password)
console.log(res )
  ctx.body = res

})

router.get('/', async (ctx, next) => {

  ctx.body = "江远强的技术博客"

})

router.get('/token', async (ctx, next) => {
  let res = await util.getToken()
  ctx.body = res

})



router.get('/string', async (ctx, next) => {

  let req = ctx.request
  console.log(req.body)
  ctx.body = "save success"
})

router.get('/json', async (ctx, next) => {
  let json = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
  ctx.body = json
})

module.exports = router
