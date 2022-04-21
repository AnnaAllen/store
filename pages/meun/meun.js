import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
import {getAllShop, getAllClassify, AllExtra} from '../../api/api'
Page({
  data: {
    activeKey: 0,
    classify: ['热门','今日','奶茶'],
    classifyItem: [],
    shopItem: [],
    allItem: [],
    isShow: false,
    shopDetial: {},
    extra: {}
  },
  onReady: function () {
    this.getShop()
  },
  async getShop() {
    const {data} = await getAllShop()
    const res = await getAllClassify()
    const res2 = await AllExtra()
    let classify = res.data.map(item => {return item.classifyName})
    classify.unshift("全部")
    // console.log(classify.unshift("全部"))
    this.setData({
      shopItem: data,
      classify,
      classifyItem: res.data,
      allItem: data,
      extra: {content: res2.data,select: 0}
    })
    // console.log(this.data.classify)
  },
  onChange(event) {
    if(event.detail == 0) {
      this.setData({
        shopItem: this.data.allItem
      })
      return
    }
    let classifyId = this.data.classifyItem[event.detail-1]._id
    let item = this.data.allItem.filter(item => item.menuTypeId == classifyId)
    this.setData({
      shopItem: item
    })
  },
  getItemId(val) {
    let a = this.data.allItem.filter(item => item._id == val.detail)
    this.setData({
      isShow: !this.data.isShow,
      shopDetial: a[0]
    })
  },
  close(bool) {
    // this.isShow = bool.detail
    this.setData({
      isShow: bool.detail
    })
  }
});