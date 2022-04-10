import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({
  data: {
    activeKey: 0,
    classify: ['热门','今日','奶茶'],
    shopItem: [
      {
        _id: '1',
        menu: '蜜桃四季春',
        price: '10',
        menuImage: '',
        describe: '新鲜苦瓜和广东香水柠檬的联合加盟，全新口感'
      },
      {
        _id: '2',
        menu: '蜜桃四季春',
        price: '10',
        menuImage: '',
        describe: '新鲜苦瓜和广东香水柠檬的联合加盟，全新口感'
      }
    ],
    isShow: false
  },

  onChange(event) {
    Notify({ type: 'primary', message: event.detail });
  },
  getItemId(val) {
    this.setData({
      isShow: !this.data.isShow
    })
    // console.log(val.detail)
  },
  close(bool) {
    // this.isShow = bool.detail
    this.setData({
      isShow: bool.detail
    })
  }
});