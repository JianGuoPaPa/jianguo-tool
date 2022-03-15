/**
 * @description: 几种数组拷贝方法
 * @param {*} arr
 * @return {*} newArr
 */

// 展开运算符
function arrCopyBySpreadOperator(arr) {
    return [...arr];
}

// Array.from()
function arrCopyByArrayFrom(arr) {
    return Array.from(arr);
}

// Array.slice()
function arrCopyByArraySlice(arr) {
    return arr.slice();
}

// Array.filter()
function arrCopyByArrayFilter(arr) {
    return arr.filter(() => true);
}

// Object.assign()
function arrCopyByObjectAssign(arr) {
    return Object.assign([], arr);
}

// Array.reduce()
function arrCopyByArrayReduce(arr) {
    return arr.reduce((prev, cur) => {
        prev.push(cur);
        return prev;
    }, []);
}

export default {
    arrCopyBySpreadOperator,
    arrCopyByArrayFrom,
    arrCopyByArraySlice,
    arrCopyByArrayFilter,
    arrCopyByObjectAssign,
    arrCopyByArrayReduce
};
