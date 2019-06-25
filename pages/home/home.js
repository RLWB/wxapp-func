// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //跳转左滑删除页面
  toLeftSlideDel() {
    wx.navigateTo({
      url: '/pages/slideLeftDel/slideLeftDel',
    })
  },
  //跳转webview页面
  toWebview() {
    wx.navigateTo({
      url: '/pages/webview/webview?url=' + 'https://h5.m.taobao.com',
    })
  },
  //跳转share页面
  toShare() {
    wx.navigateTo({
      url: '/pages/share/share',
    })
  }
})