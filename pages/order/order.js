import {getUserOrder} from '../../api/api'
Page({
  data: {
    active: 'a',
    order: [],
    doneOrder: [],
    history: ['11'],
    status: 'done',
    sticky: true
  },
  onReady() {
    this.getOrder()
  },
  async getOrder() {
    const {data} = await getUserOrder({status: 'doing'})
    const res = await getUserOrder({status: 'done'})
    let order = [], doneOrder = []
    if(data.model.length>0) order = [...data.model]
    if(res.data.model.length>0) doneOrder = [...res.data.model]
  
    this.setData({
      order,
      doneOrder
    })
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
});