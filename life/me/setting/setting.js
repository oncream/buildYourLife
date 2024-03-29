// life/me/setting/setting.js
var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: "",
    complementaryColor:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad")
    var that=this;
    var color = app.globalData.g_item_color;
    var complementaryColor = app.globalData.g_complementary_color;
    var lifeUrl = app.globalData.g_lifeUrl;
    that.setData({
      color: color,
      complementaryColor: complementaryColor,
      lifeID:options.lifeID
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: color

    })
  },
  openMyInfo:function(event){
    wx.navigateTo({
      url: './myInfo/myInfo?lifeID='+this.data.lifeID,
    })
  },
  openAdvices:function(event){
    wx.navigateTo({
      url: './advices/advices?lifeID=' + this.data.lifeID,
    })
  },
  openVersion:function(event){
    wx.navigateTo({
      url: './lifeVersion/lifeVersion',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})