// 计算时间戳
// 传入值，item =  '2021-12-29 15:33:28'
const time = (item) => {
  let time = item.pub_time.replace(/-/g,"/")
  let index = time.indexOf(' ')
  let getDataDate = time.slice(0,index)
  let msgTime = time.slice(0,index)
  let date = new Date()
  let a = (date.getTime()/1000 - Date.parse(new Date(getDataDate))/1000)/(3600*24)
  if(a<1) {
    // 1小时内就显示x分钟前；
    // 1天内就显示x小时前；
    let getDataHour = new Date(time).getHours()
    let nowHour = date.getHours()
    if(nowHour > getDataHour) {
      msgTime = (nowHour-getDataHour) + '小时前'
    } else {
      msgTime = (date.getMinutes() - new Date(time).getMinutes()) + '分钟前'
    }
  }else if(1<a && a<3) {
    msgTime = parseInt(a)+'天前' // 3天内显示x天前
  }else if (3<a && a<365) {
    msgTime = time.slice(5,index) // 今年内不显示年份
  }else if (365<a) {
    msgTime = time.slice(0,index) // 去年及以前显示年份
  }
  return msgTime
}
export default time