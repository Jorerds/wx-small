const api = require('../../config/api.js');
const util = require('../../utils/util.js');
// pages/usrs/usrs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
            userList:[],
    },
    getIndexData: function () {
        let that = this;
        console.log(that)
        // util.request(api.IndexUrl).that(function (res) {
        //     console.log(res)
        //     if (res.errno === 0) {
        //         that.setData({
        //             userList: res
        //         })
        //     }
        // })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getIndexData();
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

    }
})