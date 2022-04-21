// pages/comfirmAnOrder/index.js
import { saveOrder } from '../../api/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderItem: [],
    allPrice: 0,
    eatType: [
      {name: '店内就餐', val: 'eatInShop'},
      {name: '打包带走', val: 'takePackage'}
    ],
    currentTypeIndex: 0
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let orderItem = wx.getStorageSync('shopCar')
    console.log(orderItem)
    let allPrice = 0
    orderItem.forEach(item => {
      allPrice += item.price
    })
    this.setData({
      orderItem,
      allPrice
    })
  },
  changeType(e) {
    // console.log(e.currentTarget.dataset.index)
    this.setData({
      currentTypeIndex: e.currentTarget.dataset.index
    })
  },
  async pay() {
    let name = wx.getStorageInfoSync("userInfo")
    let {allPrice,orderItem,currentTypeIndex,eatType} = this.data
    eatType = JSON.stringify(eatType[currentTypeIndex])
    orderItem = JSON.stringify(orderItem)
    let data = {
      allPrice,
      orderItem,
      eatType,
      userName: '微信用户',
      status: 'doing'
    }
    // console.log(data)
    const res = await saveOrder(data)
    if(res) {
      wx.showToast({
        title: '成功提示！',
        icon: 'success',
        duration: 2000 //持续的时间
      })
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/order/order',
        })
      }, 2000)
    }
  },
  // 获取用户信息
  
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