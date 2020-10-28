$(function () {
  $.ajax({
    type: 'get',
    url: '/getSiteInfo',
    dataType: 'json',
    success: function (res) {
      if(res.code === 200) {
        $('form').html(template('siteInfoTemp',res))
      }
    }
  })

  // 更新网站信息
  $('form').on('click','.btnSave',function (e) {
    e.preventDefault()
    var data = ($('form').serialize())
    var obj = common.getStringToObj('?' + data)
    obj.comment_status = obj.comment_status ? '1' : '0'
    obj.comment_reviewed = obj.comment_reviewed ? '1' : '0'
    console.log(obj)
  })
})