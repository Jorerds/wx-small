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
// 获取当期日期
function getTime(models=1){
    var res=''
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month = now.getMonth();//得到月份
    var date = now.getDate();//得到日期
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (models==1){
        res = year + '' + month + '' + date
    }
    else if(models==2){
        res=year+'-'+month+'-'+date
    }
    else{
        res=year+'/'+month+'/'+date
    }
    return res
}
module.exports={
    request:request,
    getTime: getTime
}