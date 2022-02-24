import timeFn from './library/time';
import filterFn from './library/filter';
import validateFn from './library/validate';

export default {
    ...timeFn,
    ...filterFn,
    ...validateFn
};
