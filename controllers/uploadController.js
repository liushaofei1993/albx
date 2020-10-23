// 这个控制器用于文件上传

// 引入formidable
const formidable = require('formidable')

// 实现文件上传操作
exports.uploadFile = (req,res) =>{
  // 1.创建文件上传对象
  const form = new formidable.IncomingForm()
  // 2.设置编码方式
  form.encoding = 'utf-8'
  // 3.设置上传文件存储路径
  form.uploadDir = '../uploads'
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
      console.log(fields)
      console.log(files)
      res.end('')
    }

  })
}