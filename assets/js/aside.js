$(function(){
  // 1.获取当前页面路由
  var routerName = common.getRouterName(location.href) 
  // alert(routerName)
  // 根据路由判断菜单项是否展开和合并
  if (routerName === 'posts' || routerName === 'post-add' || routerName === 'categories') {
    // 获取DOM元素
    var menu_posts = $('#menu-posts')
    // 添加类和修改类
    menu_posts.addClass('in')
    menu_posts.attr('atia-expanded',true)
  }
  // 设置菜单项也需要这个功能
  if (routerName === 'nav-menus' || routerName === 'slides' || routerName === 'settings') {
    var menu_settings = $('#menu-settings')
    menu_settings.addClass('in')
    menu_settings.attr('atia-expanded',true)
  }

  // 将当前点击的菜单项的字体改为白色
  // 排他思想
  $('li').removeClass('active')
  // 通过路由名称与id对应来获取当前点击的DOM元素
  $('#'+routerName).addClass('active')
})