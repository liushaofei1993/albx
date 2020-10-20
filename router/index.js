// 封装路由模块
// 引入express
const express = require('express')
// 引入页面的控制器模块
const pagesController = require('../controllers/pagesController.js')
// 创建路由中间件
const router = express.Router()
// 使用路由中间件
// router.get('/',(req,res) => {
//   userController.getIndexPage(req,res)
// })

// 读取前台页面
router.get('/',pagesController.getIndexPage)
      .get('/list',pagesController.getListPage)
      .get('/detail',pagesController.getDetailPage)
// 读取后台页面
      .get('/admin',pagesController.getAdminIndexPage)
module.exports = router