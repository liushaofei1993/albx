// 引入mysql
var mysql = require('mysql')
// 创建连接
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'baixiu',
  dateStrings: true   // 可以将数据库中的日期格式的数据读取之后自动进行合理的转换
})
// 打开连接--不用写,默认找到最新创建的连接来使用

// 登录业务
exports.login = (email,callback) =>{
  var sql = `select * from users where email = '${email}'`
  connection.query(sql,(err,results) =>{
    if(err) {
      callback(err)
    } else{
      claaback(null,results[0])
    }
  })
}