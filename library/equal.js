/**
 * @description: 精准判断类型
 * @param {any} target 检测目标
 * @param {any} predictType 推测类型, 有该参数时返回true/false
 * @return {string|boolean} 精准类型字符串/预测结果
 */
function getType(target, predictType) {
    const classToType = {
        '[object Boolean]': 'boolean',
        '[object String]': 'string',
        '[object Number]': 'number',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
        '[object Array]': 'array',
        '[object Function]': 'function',
        '[object Symbol]': 'symbol',
        '[object Map]': 'map',
        '[object Date]': 'date',
        '[object RegExp]': 'regexp',
        '[object Math]': 'math',
        '[object Error]': 'error',
        '[object JSON]': 'json',
        '[object Arguments]': 'arguments'
        // ...待补充
    };
    const type = classToType[Object.prototype.toString.call(target)];
    return predictType ? predictType === type : type;
}

/**
 * @description: 字符串\数组中是否包含某个元素
 * @param {array|string} main 主体
 * @param {string} child 被包含元素
 * @return {boolean} 被包含元素索引
 */
function hasStr(main, child) {
    if (!getType(child, 'string')) {
        throw new Error('second param must be a string!');
    } else if (['array', 'string'].includes(getType(main))) {
        return main.indexOf(child) > -1;
    } else {
        return false;
    }
}

export default {
    getType,
    hasStr
};
