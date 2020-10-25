$(function () {
  $.ajax({
    url: '/getAllCateList',
    dataType: 'json',
    success: function (res) {
      console.log(res)
      $('tbody').html(template('cateTemp',res))
    }
  })
})