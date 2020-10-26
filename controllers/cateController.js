// 这个控制器用来处理文章分类相关的业务

var cateModule = require('../modules/cateModule.js')

// 获取所有分类数据
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

// 编辑分类数据
exports.editCategory = (req,res) => {
  var obj = req.body
  console.log(obj)
  cateModule.editCategory(obj,(err) => {
    if(err) {
      res.json({
        code: 400,
        msg: '数据编辑失败'
      })
    } else {
      res.json({
        code: 200,
        msg: '数据编辑成功'
      })
    }
  })
}

// 删除分类数据
exports.delCategory = (req,res) => {
  var id = req.query.id
  cateModule.delCategory(id,(err) => {
    if(err) {
      res.json({
        code: 400,
        msg: '数据删除失败'
      })
    } else {
      res.json({
        code: 200,
        msg: '数据删除成功'
      })
    }
  })
}

// 新增分类数据
exports.addCategory = (req,res) => {
  var obj = req.body
  cateModule.addCategory(obj,(err) => {
    if(err) {
      res.json({
        code: 400,
        msg: '数据新增失败'
      })
    } else {
      res.json({
        code: 200,
        msg: '数据新增成功'
      })
    }
  })
}