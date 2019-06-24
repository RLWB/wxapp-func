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
  }
})