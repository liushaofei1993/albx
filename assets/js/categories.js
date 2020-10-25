$(function () {
  // 获取分类数据
  $.ajax({
    url: '/getAllCateList',
    dataType: 'json',
    success: function (res) {
      console.log(res)
      $('tbody').html(template('cateTemp',res))
    }
  })

  // 编辑分类数据--使用事件委托的方式
  $('tbody').on('click','.btnEdit',function () {
    // 获取当前行的数据
    // 通过自定义属性获取
    // jq的方式: var obj = $(this).data()
    // 原生方式: var obj = $(this)[0].dataset     获取到的是DOM对象
    var data = $(this).data()
    console.log(data)
    $('[name=id]').val(data.id)
    $('#name').val(data.name)
    $('#slug').val(data.slug)
  })
})