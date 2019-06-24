// pages/slideLeftDel/slideLeftDel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    startX: 0,
    rpxToPx: 1
  },

  //change事件
  change(e) {
    console.log(e)
  },
  //触摸开始
  touchStart(e) {
    let start = e.changedTouches[0].pageX;
    this.setData({
      startX: start
    })
    console.log(e)
  },
  //触摸结束
  touchEnd(e) {
    let end = e.changedTouches[0].pageX;
    // this.setData({
    //   x: -100
    // })
    console.log(e)
    if (end - this.data.startX > -50 * this.data.rpxToPx) {
      this.setData({
        x: 0
      })
    }else {
      this.setData({
        x: -100 * this.data.rpxToPx
      })
    }
  },
  onLoad() {
    wx.getSystemInfo({
      success: (res)=> {
        let rpxToPx = res.screenWidth/750;
        this.setData({
          rpxToPx: rpxToPx
        })
      },
    })
  }
})