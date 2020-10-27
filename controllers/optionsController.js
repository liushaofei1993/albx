// 这个文件处理与options表相关的操作

const optionsModule = require('../modules/optionsModule.js')

// 添加导航菜单项
exports.addMenu = (req,res) => {
  var obj = req.body
  obj.icon = 'fa fa-glass'
  optionsModule.addMenu(obj,(err) => {
    if(err){
      res.json({
        code: 400,
        msg: '导航菜单项添加失败'
      })
    } else {
      res.json({
        code: 200,
        msg: '导航菜单项添加成功'
      })
    }
  })
}

// 获取网站设置信息
exports.getSiteInfo = (req,res) => {
  optionsModule.getSiteInfo((err,data) => {
    if(err){
      res.json({
        code: 400,
        msg: '数据获取失败'
      })
    } else {
      res.json({
        code: 200,
        msg: '数据获取成功',
        data
      })
    }
  })
}