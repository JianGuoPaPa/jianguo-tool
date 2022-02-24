/*
 * @Author: jianguopapa
 * @Date: 2021-03-11 23:36:37
 * @LastEditors: jianguopapa
 * @LastEditTime: 2021-03-12 00:07:19
 * @Description: 坚果爸爸
 * @FilePath: /jianguo-tool/library/time.js
 */

/**
 * @description: 时间戳转yyyy-MM-dd HH:mm:ss
 * @param {*} date
 * @return {*}
 */
function formatDate(date) {
  var date = new Date(date);
  var YY = date.getFullYear() + "-";
  var MM =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var hh =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var mm =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return YY + MM + DD + " " + hh + mm + ss;
}

export default {
  formatDate,
};
