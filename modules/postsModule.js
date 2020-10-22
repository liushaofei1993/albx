// posts表的数据处理操作

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

// 获取所有文章数据
/* params:
pagenum: 当前页码
pagesize: 每页条数
query: 查找参数
*/
exports.getPostList = (params,callback) =>{
  // 创建sql语句
  var sql = `select posts.id,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id,users.nickname,categories.name
            from posts
            inner join users on posts.user_id = users.id
            inner join categories on posts.category_id = categories.id
            limit ${(params.pagenum-1)*params.pagesize},${params.pagesize}`
// 查询数据库
connection.query(sql,(err,results) => {
  if (err) {
    callback(err)
  } else {
    callback(null,results)
  }
})
}
