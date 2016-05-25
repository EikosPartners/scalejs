/*
 * Minimal base implementation.
 */

/*global define*/
import array from './scalejs.base.array';
import log from './scalejs.base.log';
import object from './scalejs.base.object';
import type from './scalejs.base.type';
    

    export default {
        type:   type,
        object: object,
        array:  array,
        log:    log
    };

