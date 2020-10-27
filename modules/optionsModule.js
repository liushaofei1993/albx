// 这个文件处理与options表相关的数据

var connection = require('./mysqlHelp.js')

// 添加导航菜单项
exports.addMenu = (obj,callback) => {
  // 1.查询键为nav_menus的value值
var sql = 'select value from `options` where id = 9'
connection.query(sql,(err,results) => {
  if(err) {
    callback(err)
  } else {
    // 2.将value值转换为JS数组
    var arr = JSON.parse(results[0].value)
    // 3.将数据添加到数组中
    arr.push(obj)
    // 4.将新数组转换为JSON字符串
    var str = JSON.stringify(arr)
    // 5.更新数据
    var sql = 'update options set value = ? where id = 9 '
    connection.query(sql,[str],(err1) => {
      if(err1) {
        callback(err1)
      } else {
        callback(null)
      }
    })
  }
})
}

// 获取网站设置信息
exports.getSiteInfo = (callback) => {
  var sql = 'select value from `options` where id < 9'
  connection.query(sql,(err,results) => {
    if(err) {
      callback(err)
    } else {
      callback(null,results)
    }
  })
}
