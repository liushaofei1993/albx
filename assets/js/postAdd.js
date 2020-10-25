$(function () {
  // 加载所有分类数据
  $.ajax({
    url: '/getAllCateList',
    dataType: 'json',
    success: function (res) {
      console.log(res)
      if(res.code === 200) {
        // 生成分类数据的动态结构
        var html = ''
        for(var i=0;i<res.data.length;i++){
          html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
        }
        $('#category').html(html)
      }
    }
  })

  // 初始化富文本框: 富文本框通过文本域的指定id值,覆盖文本域,进行替换
  CKEDITOR.replace( 'content' )


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
        // console.log(res)
        // 判断上传成功与否
        if(res.code === 200) {
          // 先把上传文件名称存储到创建的隐藏域中,便于新增文章时表单内容的获取
          $('[name=feature]').val(res.img)
          // 实现上传文件的预览
          $('.thumbnail').attr('src','/uploads/' + res.img).show()
        }
      }
    })
  })

  // 判断当前路由有没有参数,就是当前可能存在的pid值
  // 获取一个不存在的对象--报错: 对象未定义
  // 获取一个对象不存在的属性--仅仅是返回undefined
  var id = common.getRouterParams(location.search).id

  // 修改提示文本
  id ? $('.page-title > h1').text('编辑文章') : $('.page-title > h1').text('写文章')
  // 有就是编辑文章,需要拉取文章数据,做一个默认展示,没有就是新增文章,执行上面的分类数据展示即可
  if (id) {
    // 要根据ID号获取当前要编辑的文章数据
    $.ajax({
      url: '/getPostById',
      data: { id },
      dataType: 'json',
      success: function (res) {
        console.log(res)
        if(res.code === 200) {
          $('#title').val(res.data.title)
          $('#content').val(res.data.content)
          $('#slug').val(res.data.slug)
          $('.thumbnail').attr('src','/uploads/' + res.data.feature).show()
          // 细节1: 还需要将图片名称存储到隐藏域中,以便编辑提交时图片名称的获取
          $('[name=feature]').val(res.data.feature)
          $('#category').val(res.data.category_id)
          // 细节3: 返回数据的格式不是表单元素所需要的格式,所以页面展示不显示时间,解决办法: 在后台使用moment格式化从数据库中拉取的数据为前台表单元素所需要的格式
          $('#created').val(res.data.created)
          $('#status').val(res.data.status)
          // 细节2: 还需要将文章id存储到隐藏域中,以便编辑提交时文章id的获取,这个操作需要先添加隐藏域
          $('[name=id]').val(res.data.id)
        }
      }
    })
  }

    // 获取文章数据,新增文章
    $('.btnSave').on('click',function(e) {
      e.preventDefault()
  
      // 获取富文本框的值: 有两种方式: 第一种推荐,第二种需要和serialize拼接,数据多了,拼接就非常麻烦!
      // 1. 这种方式是将富文本框的数据与文本域进行同步,非常方便后期参数的获取
      CKEDITOR.instances.content.updateElement()
  
      // // 2. CKEDITOR.instances: 是由replace方法所创建的CKEDITOR的所有实例对象,包含了所有的富文本框,通过getDate方法可以获取值
      // var data = CKEDITOR.instances.content.getData()
      // console.log(data) // <p>富文本框中的内容</p>
  
      // 获取当前表单所有name属性的value值,拼接成 键=值&键=值 的形式
      // console.log($('.row').serialize())

      // 判断有无id,编辑还是新增
      if (id) {
        opt('/editPost')
      } else {
        opt('/addPost')
      }

    })

    // 封装一个功能: 点击保存时添加文章数据到数据库
    function opt(url) {
      $.ajax({
        type: 'post',
        url: url,
        data: $('.row').serialize(),
        dataType: 'json',
        success: function (res) {
          // console.log(res)
          if(res.code === 200) {
            $('.alert-danger > strong').text('新增成功')
            $('.alert-danger > span').text(res.msg)
            $('.alert-danger').fadeIn(500).delay(1000).fadeOut(400)
            setTimeout(() => {
              location.href = '/admin/posts'
            }, 2000);
          }
        }
      })
    }
  
})