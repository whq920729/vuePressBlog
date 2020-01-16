module.exports = {
  title: 'whq\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vuePressBlog/', // 这是部署到github相关的配置
  dest: 'public',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      // {text: '基础', link: '/base/' },
      // {text: '常用工具', link: '/devtool/'},
      // {text: '工作问题', link: '/work/'},
      // {text: '博客园', link: 'https://www.cnblogs.com/whq920729/'}
      {text: '述职报告', link: '/report/' },
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};
