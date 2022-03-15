/*
 * @Author: jianguopapa
 * @Date: 2021-03-11 23:36:49
 * @LastEditors: jianguopapa
 * @LastEditTime: 2021-03-12 00:13:17
 * @Description: 坚果爸爸
 * @FilePath: /jianguo-tool/library/validate.js
 */

/**
 * @description: 验证字符串是否是身份证号
 * @param {*} str
 * @return {*}
 */
function isIdsn(str) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(str);
}

/**
 * @description: 验证字符串是否是手机号
 * @param {*} str
 * @return {*}
 */
function isMobile(str) {
    var reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    return reg.test(str);
}

/**
 * @description: 从普通obj得到一个formdata
 * @param {*} rawObj
 * @return {*}
 */
function toFormData(rawObj) {
    //对象转formdata格式
    let formData = new FormData();
    let obj = rawObj.data;
    let arrayKey = rawObj.arrayKey;
    for (var i in obj) {
        if (isArray(obj[i])) {
            obj[i].map(item => {
                if (!arrayKey) {
                    formData.append(i, item);
                } else {
                    formData.append(i + '[]', item);
                }
            });
        } else if (obj[i] instanceof FileList) {
            //filelist 文件类型的处理
            for (var fileItem = 0; fileItem < obj[i].length; fileItem++) {
                if (!arrayKey) {
                    formData.append(i, obj[i].item(fileItem));
                } else {
                    formData.append(i + '[]', obj[i].item(fileItem));
                }
            }
        } else {
            formData.append(i, obj[i]);
        }
    }
    return formData;
}

export default {
    isIdsn,
    isMobile,
    toFormData
};
