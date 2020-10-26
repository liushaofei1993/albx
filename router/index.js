// 封装路由模块
// 引入express
const express = require('express')
// 引入页面的控制器模块
const pagesController = require('../controllers/pagesController.js')
// 引入文章的控制器模块
const postsController = require('../controllers/postsController.js')
const cateController = require('../controllers/cateController.js')
const uploadController = require('../controllers/uploadController.js')
const userController = require('../controllers/userController.js')
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
      .get('/admin/categories',pagesController.getCategoriesPage)
      .get('/admin/comments',pagesController.getCommentsPage)
      .get('/admin/login',pagesController.getLoginPage)
      .get('/admin/nav-menus',pagesController.getNavMenusPage)
      .get('/admin/password-reset',pagesController.getPasswordResetPage)
      .get('/admin/post-add',pagesController.getPostAddPage)
      .get('/admin/posts',pagesController.getPostsPage)
      .get('/admin/profile',pagesController.getProfilePage)
      .get('/admin/settings',pagesController.getSettingsPage)
      .get('/admin/slides',pagesController.getSlidesPage)
      .get('/admin/users',pagesController.getUsersPage)

      // 业务处理
      // 1.获取所有文章数据
      .get('/getPostList',postsController.getPostList)
      .get('/delPostById',postsController.delPostById)
      .post('/addPost',postsController.addPost)
      .get('/getPostById',postsController.getPostById)
      .post('/editPost',postsController.editPost)

      // 2.获取所有分类数据
      .get('/getAllCateList',cateController.getAllCateList)
      .post('/editCategory',cateController.editCategory)
      .post('/addCategory',cateController.addCategory)
      .get('/delCategory',cateController.delCategory)

      // 3.文件上传
      .post('/uploadFile',uploadController.uploadFile)

      // 4.用户登录验证
      .post('/login',userController.login)

module.exports = router