$(function () {
  // 加载所有分类数据
  $.ajax({
    url: '/getAllCateList',
    dataType: 'json',
    success: function (res) {
      console.log(res)
      // 生成分类数据的动态结构
      var html = ''
      for(var i=0;i<res.data.length;i++){
        html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
      }
      $('#category').html(html)
    }
  })

  // 初始化富文本框: 富文本框通过文本域的指定id值,覆盖文本域,进行替换
  CKEDITOR.replace( 'content' )

  // 获取表单数据,添加文章
  $('.btnSave').on('click',function(e) {
    e.preventDefault()

    // 获取富文本框的值: 有两种方式: 第一种推荐,第二种需要和serialize拼接,数据多了,拼接就非常麻烦!
    // 1. 这种方式是将富文本框的数据与文本域进行同步,非常方便后期参数的获取
    CKEDITOR.instances.content.updateElement()

    // // 2. CKEDITOR.instances: 是由replace方法所创建的CKEDITOR的所有实例对象,包含了所有的富文本框,通过getDate方法可以获取值
    // var data = CKEDITOR.instances.content.getData()
    // console.log(data) // <p>富文本框中的内容</p>

    // 获取当前表单所有name属性的value值,拼接成 键=值&键=值 的形式
    console.log($('.row').serialize())
  })

  // 文件上传
  $('#feature').on('change',function () {
    // console.log(document.querySelector('#feature').files[0])
    // 获取当前被选中的文件对象
    var myfile = document.querySelector('#feature').files[0]
    // 使用formdata的方式作为数据发送ajax请求
    // 创建formdata
    var formdata = new FormData()
    // 追加参数
    formdata.append('img',myfile)
    // formdata.append('hello','nihao')
    // 发送请求,上传文件
    $.ajax({
      type: 'post',
      url: '/uploadFile',
      data: formdata,
      processData: false,   // 不让ajax进行数据的处理,formdata会进行处理, 
      contentType: false,   // 不让ajax进行数据的编码,formdata会进行处理
      dataType: 'json',
      success: function (res) {
        console.log(res)
      }
    })
  })
})