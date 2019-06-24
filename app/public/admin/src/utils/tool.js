const formatTime = (fmt, val) => {
  var o = {
    'M+': val.getMonth() + 1,
    'd+': val.getDate(),
    'h+': val.getHours() % 12 === 0 ? 12 : val.getHours() % 12,
    'H+': val.getHours(),
    'm+': val.getMinutes(),
    's+': val.getSeconds(),
    'q+': Math.floor((val.getMonth() + 3) / 3),
    'S': val.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (val.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

export default { formatTime }
