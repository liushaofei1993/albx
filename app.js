// 1.引入express
const express = require ('express')
const querystring = require('querystring')
// 引入ejs
const ejs = require('ejs')
// 引入body-parser
var bodyParser = require('body-parser')
// 引入路由模块
const router = require ('./router')
// 2.创建应用
const app = express()
// 3.添加对指定端口的监听
app.listen(3000,() =>{
  console.log('http://127.0.0.1:3000')
})

// 设置模板引擎为ejs
app.set('view engine','ejs')
// 设置ejs所在的页面目录
app.set('views','./views')

// 4.添加静态资源托管
app.use('/assets',express.static('assets'))
app.use('/uploads', express.static('uploads'))

// 添加body-parser的配置
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 添加对所有请求的中间件处理函数,实现导航守卫
app.use(function (req, res, next) {
  var cookie = querystring.parse(req.headers.cookie)
  // 判断cookie有无,没有就重定向到登录页,有就进行下一步
  // 细节: 跳到登录页不重定向,跳到前台页面也不重定向
  if (cookie.isLogin && cookie.isLogin === 'true' || req.url === '/admin/login' || req.url.indexOf('/admin') === -1) {
    // next() 之前用户的请求操作
    next()
  } else {
    res.redirect('/admin/login')
  }
})

// 5.添加路由配置
app.use(router)