$(function () {
  function init () {
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
  }

  // 数据初始化
  init()

  // 更新网站信息
  $('form').on('click','.btnSave',function (e) {
    e.preventDefault()
    // var data = ($('form').serialize())
    // var obj = common.getStringToObj('?' + data)
    // obj.comment_status = obj.comment_status ? '1' : '0'
    // obj.comment_reviewed = obj.comment_reviewed ? '1' : '0'
    // console.log(obj)

    // 换一种方法试试
    var obj = {}
    obj.site_logo = $('#site_logo').val()
    obj.site_name = $('#site_name').val()
    obj.site_description = $('#site_description').val()
    obj.site_keywords = $('#site_keywords').val()
    obj.site_footer = $('#site_footer').val()
    obj.comment_status = $('#comment_status').prop('checked') ? 1 : 0
    obj.comment_reviewed = $('#comment_reviewed').prop('checked') ? 1 : 0
    console.log(obj)
    $.ajax({
      type: 'post',
      url: '/updateSiteInfo',
      data: obj,
      dataType: 'json',
      success: function (res) {
        console.log(res)
        if(res.code === 200) {
          init()
          $('.alert-danger > span').text(res.msg)
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
        }
      }
    })
  })

})