// 导出业务处理控制器函数
// 引入核心模块
const fs = require ('fs')

// 读取首页
module.exports.getIndexPage = (req,res) => {
  fs.readFile(__dirname + '/../views/admin/index.html',(err,data) =>{
    if (err) {
      console.log(err)
      res.end('404')
    } else{
      res.end(data)
    }
  })
}
