// pages/index/index.js
import { getIndexVal, getHotShop } from '../../api/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperArr: [],
    hotId :[],
    showLogin: false 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onReady: function () {
    this.getHomePage()
    this.isLogin()
  },
  async getHomePage() {
    const {data} = await getIndexVal()
    const {swiperArr, hotShop} = data[0]
    const res = await getHotShop(hotShop)
    // console.log(res.data)
    this.setData({
      swiperArr, 
      hotId: hotShop,
      shopItem: res.data
    })
  },
  onClose() {
    // console.log(11)
    this.setData({
      showLogin: false
    })
  },
  // 是否登录
  isLogin() {
    let that = this
    this.setData({
      showLogin:true
    })
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              wx.setStorageSync('userInfo',{
                name: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl
              })
            }
          })
        }
      },
      fall: function() {
        console.log('未授权')
        this.setData({
          showLogin: true
        })
      }
    })
  },
  // 获取用户信息
  getUserInfo() {
    let that = this
    console.log(111)
    wx.getUserProfile({
      // 调用成功后触发（回调函数）
      success: function(res) {
        console.log("成功：", res.userInfo);
        // 设置用户信息，保存到storage
        wx.setStorageSync('userInfo',{
          name: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl
        })
        that.setData({
          name: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
          showLogin: false
        });
      },
      // 调用失败后触发
      fall: function (res) {
        console.log("失败:", res);
      }
    });
    //  console.log(code)
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