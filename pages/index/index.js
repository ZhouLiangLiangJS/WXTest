Page({

  /**
   * 页面的初始数据
   */
  data: {
    navtitle:[],
    navtitleindex:0,
    LunBoImgUrls:[],
    moveList:[]
  },

  //获取导航分类列表
  getnavTitle(){
    wx.request({
      url:'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList',
      success:(req)=>{
        this.setData({
          navtitle:req.data.data.navList
        });
      }
    })
  },

  //设置点击高亮
  active(e){
    this.setData({
      navtitleindex:e.target.dataset.set
    })
  },

  //获取轮播图

  getLunBoImgUrls(){
    wx.request({
      url:'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/Swiper',
      success:req=>{
        this.setData({
          LunBoImgUrls:req.data.data.swiperList
        })
      }
    })
  },
  //获取视频列表

  getMoveList(){
    wx.request({
      url:'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videosList',
      success:req=>{
        this.setData({
          moveList:req.data.data.videosList
        })
        console.log(this.data.moveList)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  
  onLoad: function (options) {
    this.getnavTitle();
    this.getLunBoImgUrls();
    this.getMoveList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})