/*
 * @Author: jianguopapa
 * @Date: 2021-03-11 23:38:02
 * @LastEditors: jianguopapa
 * @LastEditTime: 2021-03-15 23:23:42
 * @Description: 坚果爸爸
 * @FilePath: /jianguo-tool/library/filter.js
 */

/**
 * @description: 过滤掉富文本中的标签
 * @param {*}
 * @return {*}
 */
function filterHTML(str) {
  var str = str.replace(/<\/?[^>]*>/g, ""); //去除HTML Tag
  str = str.replace(/[|]*\n/, ""); //去除行尾空格
  str = str.replace(/&npsp;/gi, ""); //去掉npsp
  return str;
}

/**
 * @description: 找到数组对象中某个对象给定属性等于给定值的那一个
 * @param {*} arr key value
 * @return {*}
 */
function findKV(arr, key, value) {
  if (arr.length === 0) return [];
  return arr.filter((item) => item[key] === value)[0];
}

export default {
  filterHTML,
  findKV,
};
