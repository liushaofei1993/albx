$(function () {
  // 添加导航菜单项
  $('.btnAdd').on('click',function (e) {
    e.preventDefault()
    $.ajax({
      type: 'post',
      url: '/addMenu',
      data: $('form').serialize(),
      dataTyep: 'json',
      success: function (res) {
        console.log(res)
      }
    })
  })
})