Page({
  data: {
    active: 'a',
    order: [],
    history: ['11']
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
});