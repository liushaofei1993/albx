// 引入文章数据处理模块
var postsModule = require('../modules/postsModule.js')
exports.getPostList = (req,res) =>{
  // 获取所有文章列表并返回
  // 调用数据模块获取数据
  postsModule.getPostList((err,data) => {
    if (err) {
      res.json({
        code:400,
        msg:'数据查询失败'
      })
    } else {
      res.json({
        code: 200,
        msg: '数据查询成功',
        data:data
      })
    }
  })
}