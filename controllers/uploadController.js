// 这个控制器用于文件上传

// 引入path
const path = require('path')

// 引入formidable
const formidable = require('formidable')

// 实现文件上传操作
exports.uploadFile = (req,res) =>{
  // 1.创建文件上传对象
  const form = new formidable.IncomingForm()
  // 2.设置编码方式
  form.encoding = 'utf-8'
  // 3.设置上传文件存储路径
  form.uploadDir = __dirname + '/../uploads'
  // 4.是否保留文件扩展名
  form.keepExtensions = true
  // 5.form.parse(req,callback)可以实现上传文件
  form.parse(req,(err,fields,files) => {
    if (err) {
      res.json({
        code: 400,
        msg: '上传文件失败'
      })
    } else{
      // 获取上传成功的文件在服务器上的存储路径的最好一部分,使用path模块非常方便
      var filename = path.basename(files.img.path)
      res.json({
        code: 200,
        msg: '上传文件成功',
        img: filename
      })
    }

  })
}