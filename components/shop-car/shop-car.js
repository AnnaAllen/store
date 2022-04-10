// components/shop-car/shop-car.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      observer: (oldVal,newVal) => {
        // console.log(oldVal,newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    extra:{content:[
      {
        extraName: '珍珠',
        extraPrice: '2',
        _id: '1'
      },
      {
        extraName: '珍珠',
        extraPrice: '2',
        _id: '2'
      },
      {
        extraName: '珍珠',
        extraPrice: '2',
        _id: '3'
      }
    ], select: 0},
    sugar: {content:['全塘','7分塘','5分糖','3分糖','不额外加糖'],select:0},
    tem: {content:['冰','少冰','去冰'], select: 0},
    size: {content:['大杯','中杯'], select: 0},
    defaultItem: {
      extra: {},
      sugar: '全糖',
      tem: '冰',
      size: '大杯'
    },
    isShowCar: false
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
      console.log(event.detail);
    },
    onCarChange(event) {

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
    addCar() {
      console.log(this.data.defaultItem)
    }
  },
})
