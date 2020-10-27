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
})