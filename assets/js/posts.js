$(function() {
  var pagenum = 1
  var pagesize = 2
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
      var html = template('postListTemp',res.data)
      $('tbody').html(html)
      setPage(Math.ceil(res.data.total / pagesize))
    }
  })
  // 实现分页
  function setPage(count) {
    $('.pagination').bootstrapPaginator({
      // 设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页: 会添加对应的样式
      currentPage: 1,
      // 总页数: 当前数据表的记录总数 / 每页所显示的记录数
      totalPages: count,
      // 当单击页码的时候,执行该函数,调用ajax渲染页面
      onPageClicked: function(event,originalEvent,type,page){

      }
    })
  }
})