// components/classify-item/classify-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopItem: {
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addItem() {
      // console.log(this.data.shopItem._id);
      this.triggerEvent('getItemId',this.data.shopItem._id)
    }
  }
})
