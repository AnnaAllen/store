// components/order-item/order-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderItem: {
      type: Object,
      default: {},
      observer: function (val){
        // console.log(val);
        let cupItem = JSON.parse(val.orderItem)
        let eatType = JSON.parse(val.eatType)
        let time = val.createOrderTime.slice(0,10)
        let num = val.orderId
        console.log(val)
        this.setData({
          cupItem,
          eatType,
          time,
          num
        })
      }
    },
    status: {
      type: String,
      default: 'doing',
      observer: function (val) {
        console.log(val);
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    cupItem :[],
    eatType: {},
    time: '',
    num: 0
  },

  /**
   * 组件的方法列表
   */

  methods: {
  }
})
