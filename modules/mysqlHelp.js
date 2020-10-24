// 这个文件封装的是mysql文件的引入和连接的创建

// exports.mysql = () => {
//   // 引入mysql
// var mysql = require('mysql')
// // 创建连接
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'baixiu',
//   dateStrings: true   // 可以将数据库中的日期格式的数据读取之后自动进行合理的转换
// })
// // 打开连接--不用写,默认找到最新创建的连接来使用
// }

  // 引入mysql
const mysql = require('mysql')
// 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'baixiu',
  dateStrings: true   // 可以将数据库中的日期格式的数据读取之后自动进行合理的转换
})
// 打开连接--不用写,默认找到最新创建的连接来使用

module.exports = connection
