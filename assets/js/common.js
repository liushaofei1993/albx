var common = {
  // 获取当前路由名称
  getRouterName: (href) => {
    // 存储查找结果
    var index = href.indexOf('?')
    // 定义一个变量用来储存路由名称
    var routerName = ''
    // 判断是否带有参数
    if (index === -1) {
      routerName = href.slice(href.lastIndexOf('/') + 1)
    } else {
      routerName = href.slice(href.lastIndexOf('/') + 1, href.indexOf('?'))
    }
    return routerName
  },

  // 获取当前路由中的参数
  getStringToObj: (search) =>{
    var obj = {}
    // 获取到路径后面的参数部分: location.search = "?id=1&name=wang"
    // 去掉?
    var str = search.slice(1)
    // 以&分割成数组
    var arr = str.split('&')
    // 遍历数组,对每一项以=分割成数组,并在遍历的时候把分割后的数组中的数据添加到对象中
    for(var i=0;i<arr.length;i++){
      var temp = arr[i].split('=')  // ['id','1','name','wang']
      obj[temp[0]] = temp[1]
    }
    return obj
  }

}