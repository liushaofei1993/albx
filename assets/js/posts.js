$(function() {
  // 全局变量: 当前页码,每页条数
  var pagenum = 1
  var pagesize = 2
  // 发起请求,获取文章数据
  init()
  // 数据初始化
  function init () {
    $.ajax({
      type: 'get',
      url: '/getPostList',
      data: {
        pagenum: pagenum,
        pagesize: pagesize
      },
      datatype: 'json',
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