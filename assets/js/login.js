$(function () {
  // 用户登录
  $('.btnLogin').on('click',function (e) {
    e.preventDefault()
    // console.log($('.loginForm').serialize())
    var email = $('[name="email"]').val()
    var password = $('[name="password"]').val()
    console.log(email,password)
    $.ajax({
      type: 'post',
      url: '/login',
      beforeSend: function () {
        if(!/\w+[@]\w+[.]\w+/.test(email)) {
          $('.alert-danger > span').text('请输入合法的电子邮箱')
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
          return false
        }
        if(password.trim().length < 6) {
          $('.alert-danger > span').text('请输入密码')
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
          return false
        }
      },
      data: $('.loginForm').serialize(),
      dataType: 'json',
      success: function (res) {
        // console.log(res)
        if(res.code === 200) {
          // 跳转
          location.href = '/admin'
        } else {
          // 登录失败提示
          $('.alert-danger > span').text(res.msg)
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
        }
      }
    })
  })
})