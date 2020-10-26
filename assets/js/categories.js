$(function () {
  // 数据初始化: 封装获取分类数据请求
  function init(){
    $.ajax({
      url: '/getAllCateList',
      dataType: 'json',
      success: function (res) {
        console.log(res)
        $('tbody').html(template('cateTemp',res))
      }
    })
  
  }
  // 获取分类数据
  init()
  // 分类数据编辑时的默认填充--使用事件委托的方式
  $('tbody').on('click','.btnEdit',function () {
    // 编辑时对分类表单的修改
    $('#prompt').text('编辑分类目录')
    $('.addCategory').hide()
    $('.editCategory').show()
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

  // 编辑按钮,提交分类数据
  $('.editCategory').on('click',function (e) {
    e.preventDefault()
    opt('/editCategory')
  })

  // 封装一个功能: 添加或编辑分类数据
  function opt (url) {
    $.ajax({
      type: 'post',
      url: url,
      data: $('#cateForm').serialize(),
      success: function (res) {
        console.log(res)
        if(res.code === 200) {
          // 提示信息
          $('.alert-danger > span').text(res.msg)
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
          // 改回分类表单添加分类的提示
          $('#prompt').text('添加新的分类目录')
          $('.addCategory').show()
          $('.editCategory').hide()
          // 清空分类表单信息
          $('#name').val('')
          $('#slug').val('')
          // 刷新
          init()
        }
      }
    })
  }

  // 实现分类数据的删除
  $('tbody').on('click','.btnDel',function (e) {
    e.preventDefault()
    // 获取当前分类数据的id
    var id = $(this).data().id
    if(confirm('您确定要删除它吗?')) {
      $.ajax({
        url: '/delCategory?id=' + id,
        dataType: 'json',
        success: function (res) {
          if(res.code === 200) {
            $('.alert-danger > span').text(res.msg)
            $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
            init()
          }
        }
      })
    }
  })
  
  // 页面操作功能
  // 1.全选全不选
  $('.chkAll').on('change',function () {
    // 取全选复选框的checked属性值
    var statu = $('.chkAll').prop('checked')
    // 将tbody中所有复选框的checked属性值赋值为上面刚取到的的属性值
    $('tbody').find('.chkSinger').prop('checked',statu)
  })

  // 2.当复选框选中的数量大于1时,显示批量删除按钮
  $('tbody').on('change','.chkSinger',function () {
    // 获取当前所有的复选框数量,为了与被选中的做比较
    var total= $('tbody').find('.chkSinger').length
    // 获取当前被选中的复选框的数量:使用了伪类选择器
    var cnt = $('tbody').find('.chkSinger:checked').length
    // 判断当前被选中的复选框的数量,大于1,就显示批量删除
    if(cnt > 1) {
      $('.btnDels').show(500)
    } else{
      $('.btnDels').hide(500)
    }
    // 判断当前选中的复选框数量是否等于总的复选框数量,等于就修改全选框的状态
    if (cnt === total) {
      $('.chkAll').prop('checked',true)
    } else{
      $('.chkAll').prop('checked',false)
    }
  })

})