var common = {
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
  }
}