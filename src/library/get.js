/**
 * @description: 根据路径获取值, 未获取到返回undefined
 * @param {*} object
 * @param {*} valuePath
 * @param {*} valuePath
 * ...
 * @return {*}
 */
// function get(object, path) {
//     const r = path
//         .replace(/\[(\w+)\]/g, '.$1') // b[0] -> b.0
//         .split('.')
//         .reduce((p, n) => {
//             return p[n];
//         }, object);
//     console.log(r);
// }
function get(object, ...paths) {
    const r = paths.map(path => {
        return path
            .replace(/\[(\w+)\]/g, '.$1') // b[0] -> b.0
            .split('.')
            .reduce((p, n) => {
                return p ? p[n] || undefined : undefined;
            }, object);
    });
    console.log(r);
}

// const target = {
//     a: { someKey: 'someValue' },
//     b: [1, 2, 3, 4, { innerObjKey: 'innerObjValue' }],
//     c: { anotherKey: 'anotherValue' }
// };

// get(target, 'a.b.someMoreKey');
// get(target, 'b[0]');
// get(target, 'a.b.someMoreKey', 'b[0]', 'c.anotherKey');

export default {
    get
};
