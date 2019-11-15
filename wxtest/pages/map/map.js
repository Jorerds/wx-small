// pages/map/map.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 地图经纬度
        longitude: 113.324520,
        latitude: 23.099994,
        // 标记点经纬度
        markers: [{
            iconPath: "/images/map_inc.png",
            id: 1,
            longitude: 113.324520,
            latitude: 23.099994,
            width: 30,
            height: 30
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        qqmapsdk = new QQMapWX({
            key: 'V6RBZ-5VH6F-6EVJ3-NL5JI-BTQD6-RUFLW'
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        qqmapsdk.search({
            keyword: '饮食',
            success: function (res) {
                console.log(res);
            },
            fail: function (res) {
                console.log(res);
            },
            complete: function (res) {
                console.log(res);
            }
        });
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    getMap: function () {
        var that = this;
        wx.getLocation({
            type: 'wgs84',
            success: (res) => {
                // var latitude = res.latitude // 纬度
                // var longitude = res.longitude // 经度
                res.verticalAccuracy
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    //数组的对象用这种方式来改数组中的某一个值
                    'markers[0].latitude': res.latitude,
                    'markers[0].longitude': res.longitude
                })
                console.log(res)

            }
        })
    },
    //   点击标记时候触发的事件
    markertap(e) {
        console.log(e)
    },
    controltap(e) {
        console.log(e.controlId)
    }
})