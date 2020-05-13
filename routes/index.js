const router = require('koa-router')()
const db = require('./crud')



router.get('/login', async (ctx, next) => {
  let req = ctx.request
  var {username,password} = req.body;
  let res = await db.findUser(username,password)
  ctx.body = res

})

router.get('/publish', async (ctx, next) => {

  await ctx.render('publish')

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
