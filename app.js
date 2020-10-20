// 1.引入express
const express = require ('express')
// 引入ejs
const ejs = require('ejs')
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
// 5.添加路由配置
app.use(router)