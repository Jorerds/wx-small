const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

function request(url,data={},method='GET'){
    return new Promise(function(resolve,reject){
        wx.request({
            url: url,
            data:data,
            method:method,
            header:{
                'Content-Type':'application/json',
                'X-Nideshop-Token':wx.getStorageSync('token')
            },
            success:function(res){
                if (res.statusCode==200){
                    resolve(res.data);
                }
            }
        })
    });
}
module.exports={
    request,
}