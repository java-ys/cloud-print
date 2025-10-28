const app = typeof getApp === 'function' ? getApp() : null;
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      default: ''
    }, 
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app && app.globalData ? app.globalData.StatusBar : 0,
    CustomBar: app && app.globalData ? app.globalData.CustomBar : 0,
    Custom: app && app.globalData ? app.globalData.Custom : null
  },
  lifetimes: {
    attached() {
      if (app && app.globalData) {
        this.setData({
          StatusBar: app.globalData.StatusBar || 0,
          CustomBar: app.globalData.CustomBar || 0,
          Custom: app.globalData.Custom || null
        });
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    BackPage() {
      wx.navigateBack({
        delta: 1
      });
    },
    toHome(){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  }
})