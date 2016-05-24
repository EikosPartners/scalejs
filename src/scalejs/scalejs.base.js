/*
 * Minimal base implementation.
 */

/*global define*/
define([
    '../scalejs.base.array.js',
    '../scalejs.base.log',
    './scalejs.base.object',
    '../scalejs.base.type'
], function (
    array,
    log,
    object,
    type
) {
    'use strict';

    return {
        type:   type,
        object: object,
        array:  array,
        log:    log
    };
});
