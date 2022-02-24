import timeFn from './library/time';
import filterFn from './library/filter';
import validateFn from './library/validate';
import equal from './library/equal';

export default {
    ...timeFn,
    ...filterFn,
    ...validateFn,
    ...equal
};
