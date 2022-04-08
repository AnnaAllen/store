import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({
  data: {
    activeKey: 0,
    classify: ['热门','今日','奶茶']
  },

  onChange(event) {
    Notify({ type: 'primary', message: event.detail });
  },
});