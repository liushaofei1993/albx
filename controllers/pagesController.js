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