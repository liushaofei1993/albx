// 这个文件用来处理与user表相关的业务

var userModule = require('../modules/userModule.js')


exports.login = (req,res) =>{
  var obj = req.body
  console.log(obj)
  // 登录验证应该从数据库中取数据在控制器中进行验证
  userModule.login(obj.email,(err,data) =>{
    if(err) {
      res.json({
        code: 400,
        msg: '服务器异常'
      })
    } else {
      if(data) {  // 有没有能够查询到的结果
        if (data.password === obj.password) {
          // 在登录成功之后,将登录状态以Set-Cookie的方式返回到客户端
          // res.writeHead(200,{
          //   'Set-Cookie': 'isLogin=true'
          // })

          // 使用session实现状态保持
          req.session.isLogin = 'true'
          // 将当前登陆用户的信息存储到session中
          req.session.currentUser = data
          res.end(JSON.stringify({
            code: 200,
            msg: '登录成功'
          }))
        } else{
          res.json({
            code: 400,
            msg: '密码输入错误'
          })
        }
      } else{
        res.json({
          code: 400,
          msg: '邮箱名输入错误'
        })
      }
    }
  })
}