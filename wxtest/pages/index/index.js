//index.js
//获取应用实例
const api=require('../../config/api.js');
const util = require('../../utils/util.js');
var md5 = require('../../utils/md5.js');
var jsencrypt = require('../../utils/jsencrypt.js');
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    status:1,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    usrList:[],
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewNewk:function(){
    wx.navigateTo({
      url:'../newk/newk'
    })
  },
//   跳转到地图页面
  bindViewMap:function(){
      wx.navigateTo({
          url: '../map/map',
      })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
      console.log(e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getBjboaData:function(){
    var that = this;
    wx.request({
        url: 'http://localhost:8016/bjboa/api',
        data: {},
        method: 'GET',
        header:{
            'content-type':'application/json',
            'X-Nideshop-Token': wx.getStorageSync('token')
        },
        success(res){
            if(res.statusCode==200){
                that.setData({
                    usrList:res.data
                })
                // console.log(res.data)
            }
        }
    })
  },
  login:function(){
    //   if(wx.getStorageSync(key)) return;
    // RSA非对称加密公共秘钥
    var password="py74108520"
      var public_key ="-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1l9GF0LMmM1GDasbriy1o3RlkRkZBD5CpxwDDHRIxQ9kxBjoKgRrusDrqneseRSysq1mFmcPe+Fj22+2TqQjFEgb+93VdWFPCtDK4JkMBAO34BmzUZNCu9Xyh+nw8dF3q88sipv85dRq0/MzP5OoSgS6whx75YKQrCbFX8sqEoQIDAQAB-----END PUBLIC KEY-----"
      var encrypt = new jsencrypt.JSEncrypt();
      encrypt.setPublicKey(public_key)
      password=encrypt.encrypt(password)
      console.log(password)

    // 获取当期时间日期
      var time =util.getTime(1);
      
      var that=this
      var t = 'xvIY41901U0ZWEwL' + time + '200' +
          'X8ReCjamjKWlKPFO'
      wx.login({
          success:function(res){
              if (res.code){
                  wx.request({
                    //   url: 'http://127.0.0.1:8088/bjboa/admin?fid=login&part=weixinlogin' ,
                      url: 'http://127.0.0.1:8088/rmoa/admin?fid=api&fun=test_usr',
                      header:{
                          'token':md5.hex_md5(t),
                      },
                    //请求头，当用post请求时候使用这个
                    //  header: {
                    //       'content-type': 'application/x-www-form-urlencoded'
                    //   },
                    //   data: { code: res.code},
                      data: { login_id: '200', mobile: '123', ticket: md5.hex_md5(t), password: password},
                      method:'get',
                      success:function(res){
                        console.log(res)
                      }
                  })
              }
          }
      })
  }
})
