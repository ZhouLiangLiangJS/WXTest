# 哔哩哔哩微信小程序
#一、首页制作
    1、创建一个公共头部组件（名为MyNav）
    2、在首页的index.json注册组件，然后index.wxml中引入
    3、制作首页的滑动分类导航区域：
        3.1、使用scoll-view让其横向滚动
        3.2、发送请求获取导航分类列表数据：
        （https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList）
        3.3、根据数据渲染页面
        3.4、点击高亮
            3.4.1、给class属性的值设置三元表达式当其点击的索引等于navtitleindex值时给其添加上样式名
            3.4.2、给其设置点击事件：点击过后让navtitleindex值等于其索引
    4、制作首页轮播图：
        4.1使用微信小程序提供的swiper标签来制作轮播
