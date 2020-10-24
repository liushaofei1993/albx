// 引入封装的mysql文件创建连接
const connection = require('./mysqlHelp.js')

// 登录业务
exports.login = (email,callback) =>{
  // email是数据库中的唯一键,所以用他来验证传进来的email值
  var sql = `select * from users where email = '${email}'`
  connection.query(sql,(err,results) =>{
    if(err) {
      callback(err)
    } else{
      // 查询最多只能查询到一条记录
      // results返回的是一个结果集,它的类型是数组
      callback(null,results[0])
    }
  })
}