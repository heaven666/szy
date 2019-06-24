export default {
// 时间格式转换
  dateTurn: function (date) {
    let dateBefore = new Date(date).toJSON()
    let dateAfter = new Date(+new Date(dateBefore) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    return dateAfter
  }
}
