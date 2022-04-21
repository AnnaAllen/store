// components/shop-car/shop-car.js
// import {AllExtra} from '../../api/api'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    extra: {
      type: Object
    },
    isShow: {
      type: Boolean,
      observer: (oldVal,newVal) => {
        // console.log(oldVal,newVal)
      }
    },
    shopDetial: {
      type: Object,
      observer: (oldVal, newVal) => {
        // console.log(oldVal,newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // extra:{content:[
    //   {
    //     extraName: '珍珠',
    //     extraPrice: '2',
    //     _id: '1'
    //   },
    //   {
    //     extraName: '珍珠',
    //     extraPrice: '2',
    //     _id: '2'
    //   },
    //   {
    //     extraName: '珍珠',
    //     extraPrice: '2',
    //     _id: '3'
    //   }
    // ], select: 0},
    sugar: {content:['全塘','7分塘','5分糖','3分糖','不额外加糖'],select:0},
    tem: {content:['冰','少冰','去冰'], select: 0},
    size: {content:['大杯','中杯'], select: 0},
    defaultItem: {
      extra: {},
      sugar: '全糖',
      tem: '冰',
      size: '大杯'
    },
    isShowCar: false,
    cupNum: 1,
    shopCar: [],
    allPrice: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close() {
      this.triggerEvent('close', false)
    },
    jumpToCount() {
      // console.log(111);
      if(this.data.shopCar.length == 0) {
        Toast('我是提示文案，建议不超过十五字~');
        return
      } 
      wx.setStorageSync('shopCar', this.data.shopCar)
      wx.navigateTo({
        url: '/pages/comfirmAnOrder/index'
      })      
    },
    closeCar() {
      this.setData({
        isShowCar: false
      })
    },
    showCar() {
      this.setData({
        isShowCar: true
      })
    },
    onChange(event) {
      this.setData({
        cupNum: event.detail
      })
      // console.log(event.detail);
    },
    selectItem(e) {
      const {index, type} = e.currentTarget.dataset
      let defaultItem = this.data.defaultItem
      let selectItem = this.data[type]
      defaultItem[type] = this.data[type].content[index]
      selectItem.select = index
      this.setData({
        defaultItem,
        [type]: selectItem,
      })
    },
    clearShopCar() {
      let {shopCar, allPrice} = this.data
      shopCar = []
      allPrice = 0
      this.setData({
        shopCar,
        allPrice
      })
    },
    addCar() {
      if(JSON.stringify(this.data.defaultItem.extra) == '{}') {
        this.data.defaultItem.extra = this.data.extra.content[0]
      }
      let price = this.data.cupNum*this.data.shopDetial.price
      let shopCarItem = {
        price, // 总价
        detail: this.data.defaultItem,
        cup: this.data.shopDetial,
        num: this.data.cupNum
      }
      let shopCar = this.data.shopCar
      shopCar.push(shopCarItem)
      let allPrice = 0
      shopCar.forEach(item => {
        allPrice += item.price
      })
      // console.log(shopCar)
      this.close()
      this.setData({
        cupNum: 1,
        shopCar,
        allPrice
      })
    },
  },
})
