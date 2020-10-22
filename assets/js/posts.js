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
      setPage()
    }
  })
  // 实现分页
  function setPage() {
    $('.pagination').bootstrapPaginator({
      // 设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页: 会添加对应的样式
      currentPage: 1,
      // 总页数: 当前数据表的记录总数 / 每页所显示的记录数
      totalPages: 10,
      // 当单击页码的时候,执行该函数,调用ajax渲染页面
      onPageClicked: function(event,originalEvent,type,page){

      }
    })
  }
})