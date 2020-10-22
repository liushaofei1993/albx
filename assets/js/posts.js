$(function() {
  $.ajax({
    type: 'get',
    url: '/getPostList',
    data: {
      pagenum: 1,
      pagesize: 3
    },
    datatype: 'json',
    success: function (res) {
      console.log(res)
      var html = template('postListTemp',res)
      $('tbody').html(html)
    }
  })
})