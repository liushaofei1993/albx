// 封装路由模块
// 引入express
const express = require('express')
// 引入用户表控制器模块
const userController = require('../controllers/userController.js')
// 创建路由中间件
const router = express.Router()
// 使用路由中间件
// router.get('/',(req,res) => {
//   userController.getIndexPage(req,res)
// })

router.get('/',userController.getIndexPage)

module.exports = router