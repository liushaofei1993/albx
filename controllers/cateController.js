// 这个控制器用来处理文章分类相关的业务

var cateModule = require('../modules/cateModule.js')

exports.getAllCateList = (req,res) => {
  cateModule.getAllCateList((err,data) =>{
    if(err) {
      res.json({
        code: 400,
        msg: '数据查询失败'
      })
    } else {
      res.json({
        code: 200,
        msg: '数据查询成功',
        data
      })
    }
  })
}