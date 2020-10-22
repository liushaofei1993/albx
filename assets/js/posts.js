$(function() {
  // 全局变量: 当前页码,每页条数
  var pagenum = 1
  var pagesize = 2
  // 发起请求,获取文章数据
  init();

  // 实现文章数据的筛选
  $('.btn-search').on('click',function (e) {
    // 阻止默认行为
    e.preventDefault()
    // 重点是获取用户数据
    var query = {}
    // 判断用户有没有选择指定的筛选条件
    if ($('.cateSelector').val() !== 'all') {
      query.cate = $('.cateSelector').val() 
    }
    if ($('.statuSelector').val() !== 'all') {
      query.statu = $('.statuSelector').val()
    }
    console.log(query)
  });

  // 使用自调用函数实现分类数据的动态加载
  (function() {
    $.ajax({
      type: 'get',
      url: '/getAllCateList',
      dataType: 'json',
      success: function (res) {
        console.log(res)
        var html = `<option value="all">所有分类</option>`
        for(var i=0;i<res.data.length;i++){
          html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
        }
        $('.cateSelector').html(html)
      }
    })
  })()

  // 数据初始化
  function init () {
    $.ajax({
      type: 'get',
      url: '/getPostList',
      data: {
        pagenum: pagenum,
        pagesize: pagesize,
        // 在向后台传递参数时,body-parser 中间件会把参数(值为undefind的)query过滤掉,导致后台接收不到query参数,那么在使用参数中的cate和statu属性的时候后台会报错,下面是解决方法,不可以写-- |  query:{}  |
        query: {
          cate:'',
          statu: ''
        }
      },
      dataType: 'json',
      success: function (res) {
        console.log(res)
        // 渲染文章列表数据
        var html = template('postListTemp',res.data)
        $('tbody').html(html)
        // 渲染分页结构
        setPage(Math.ceil(res.data.total / pagesize))
      }
    })
    
  }
  // 实现分页
  function setPage(count) {
    $('.pagination').bootstrapPaginator({
      // 设置版本号
      bootstrapMajorVersion: 3,
      // 显示分页结构中的第几页: 会添加对应的样式
      currentPage: pagenum,
      // 总页数: 当前数据表的记录总数 / 每页所显示的记录数
      totalPages: count,
      // 当单击页码的时候,执行该函数,调用ajax渲染页面
      onPageClicked: function(event,originalEvent,type,page){
        console.log(page)
        // 当前页码点击变化时,page就是当前页码值,将全局变量pagenum重置为page,在重新发请求取数据渲染即可,最好是封装一下请求文章的ajax请求
        pagenum = page
        // 重新获取数据
        init()
      }
    })
  }
})