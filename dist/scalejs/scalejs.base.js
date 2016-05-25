'use strict';

/*
 * Minimal base implementation.
 */

/*global define*/
define(['scalejs/scalejs.base.array.js', 'scalejs/scalejs.base.log', 'scalejs/scalejs.base.object', 'scalejs/scalejs.base.type'], function (array, log, object, type) {
    'use strict';

    return {
        type: type,
        object: object,
        array: array,
        log: log
    };
});