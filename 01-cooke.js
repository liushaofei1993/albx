const express = require('express')
const querystring = require('querystring')

const app = express()

app.listen(3005,() =>{
  console.log('http://127.0.0.1:3005')
})

app.get('/',(req,res) => {
  var cookie = querystring.parse(req.headers.cookie)
  console.log(cookie)
  // 判断请求头中是否有指定的状态值,如果有,就响应操作,
  // 如果没有指定的状态值,就是第一次登录,显示first,就通过Set-cookie设置状态值
  if (cookie.isLogin && cookie.isLogin === 'true') {
    res.end('welcome back')
  } else{
    // 在请求头中设置cookie信息
    res.writeHead(200,{
      'Content-Type': 'text/html; charset=utf-8',
      'Set-Cookie': 'isLogin=true'
    })
    res.end('first')
  }
})