const express = require('express')
var session = require("express-session")

const app = express()

app.listen(3005,() =>{
  console.log('http://127.0.0.1:3005')
})

app.use(session({
  secret: '什么值无所谓',
  // 重新保存: 强制会话保存,即使是未修改的.默认为true,但是得写上
  resave: false,
  // 强制"未初始化"的会话保存到存储
  saveUninitialized: false
}))

app.get('/',(req,res) => {
  if(req.session.isLogin && req.session.isLogin === 'true') {
    res.end('welcome back')
  } else{
    req.session.isLogin = 'true'
    res.end('first')
  }
})