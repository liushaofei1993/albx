$(function() {
  $.ajax({
    type: 'get',
    url: '/getPostList',
    datatype: 'json',
    success: function (res) {
      console.log(res)
      var html = template('postListTemp',res)
      $('tbody').html(html)
    }
  })
})