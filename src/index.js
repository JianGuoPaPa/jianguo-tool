import timeFn from './library/time.js';
import filterFn from './library/filter.js';
import validateFn from './library/validate.js';
import equal from './library/equal.js';
import getFn from './library/get.js';
import arrayCopyFn from './library/array-copy.js';

export default {
    ...timeFn,
    ...filterFn,
    ...validateFn,
    ...equal,
    ...arrayCopyFn,
    ...getFn
};
