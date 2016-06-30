'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scalejsBase = require('./scalejs.base.array');

var _scalejsBase2 = _interopRequireDefault(_scalejsBase);

var _scalejsBase3 = require('./scalejs.base.log');

var _scalejsBase4 = _interopRequireDefault(_scalejsBase3);

var _scalejsBase5 = require('./scalejs.base.object');

var _scalejsBase6 = _interopRequireDefault(_scalejsBase5);

var _scalejsBase7 = require('./scalejs.base.type');

var _scalejsBase8 = _interopRequireDefault(_scalejsBase7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Minimal base implementation.
 */

/*global define*/
exports.default = {
    type: _scalejsBase8.default,
    object: _scalejsBase6.default,
    array: _scalejsBase2.default,
    log: _scalejsBase4.default
};
//# sourceMappingURL=scalejs.base.js.map