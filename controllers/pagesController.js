// 专门用来返回页面的

// 引入核心模块
const fs = require ('fs')

// 读取前台页面
// 读取首页
module.exports.getIndexPage = (req,res) => {
  res.render('index.ejs')
}
// 读取列表页
module.exports.getListPage = (req,res) => {
 res.render('list.ejs')
}
// 读取详情页
module.exports.getDetailPage = (req,res) => {
  res.render('detail.ejs')
}

// 读取后台页面
// 读取首页
module.exports.getAdminIndexPage = (req,res) => {
  res.render('admin/index.ejs')
}
exports.getCategoriesPage = (req,res) => {
  res.render('admin/categories.ejs')
}
exports.getCommentsPage = (req,res) => {
  res.render('admin/comments.ejs')
}
exports.getLoginPage = (req,res) => {
  res.render('admin/login.ejs')
}
exports.getNavMenusPage = (req,res) => {
  res.render('admin/nav-menus.ejs')
}
exports.getPasswordResetPage = (req,res) => {
  res.render('admin/password-reset.ejs')
}
exports.getPostAddPage = (req,res) => {
  res.render('admin/post-add.ejs')
}
exports.getPostsPage = (req,res) => {
  res.render('admin/posts.ejs')
}
exports.getProfilePage = (req,res) => {
  res.render('admin/profile.ejs')
}
exports.getSettingsPage = (req,res) => {
  res.render('admin/settings.ejs')
}
exports.getSlidesPage = (req,res) => {
  res.render('admin/slides.ejs')
}
exports.getUsersPage = (req,res) => {
  res.render('admin/users.ejs')
}