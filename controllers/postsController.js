// 引入文章数据处理模块
var postsModule = require('../modules/postsModule.js')
// 引入moment
// var moment = require('moment')
exports.getPostList = (req,res) =>{
  // 获取分页参数: 因为已经在app.js中引入加配置,所以可以使用下面的方法,这是get请求的方法,post请求时用req.body
  var obj = req.query 
  // 获取所有文章列表并返回
  // 调用数据模块获取数据
  postsModule.getPostList(obj,(err,data) => {
    if (err) {
      res.json({
        code:400,
        msg:'数据查询失败'
      })
    } else {
      // 将日期格式进行合理的转换
      // for (var i=0;i<data.length; i++) {
      //   // moment中的参数就是你想转换的日期值,如果没有写,就默认获取当前的日期值进行转换
      //   data[i].created = moment(data[i].created).format('YYYY-MM-DD HH:mm:ss')
      // }
      res.json({
        code: 200,
        msg: '数据查询成功',
        data:data
      })
    }
  })
}