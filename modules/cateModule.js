// categories表的数据处理操作

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

// 获取所有分类数据
exports.getAllCateList = (callback) => {
  var sql = `select * from categories`
  connection.query(sql,(err,results) =>{
    if (err) {
      callback(err)
    } else {
      callback(null,results)
    }
  })
}

// 编辑分类数据
exports.editCategory = (obj,callback) => {
  var sql = 'update categories set ? where id = ?'
  connection.query(sql,[obj,obj.id],(err) =>{
    if (err) {
      callback(err)
    } else {
      callback(null)
    }
  })
}

// 删除分类数据
exports.delCategory = (id,callback) => {
  var sql = `delete from categories where id in (${id})`
  connection.query(sql,(err) =>{
    if (err) {
      callback(err)
    } else {
      callback(null)
    }
  })
}

// 新增分类数据
exports.addCategory = (obj,callback) => {
  var sql = 'insert into categories values(null,?,?)'
  connection.query(sql,[obj.slug,obj.name],(err) =>{
    if (err) {
      callback(err)
    } else {
      callback(null)
    }
  })
}