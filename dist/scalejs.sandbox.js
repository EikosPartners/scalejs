'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scalejs = require('scalejs.core');

var _scalejs2 = _interopRequireDefault(_scalejs);

require('scalejs.extensions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a sandbox to shim existing requires
// give ability to generate new sandbox if desired.
/*global define*/
/*jslint unparam:true*/
var sandbox = _scalejs2.default.buildSandbox('main', _scalejs2.default.object.merge({
    buildSandbox: _scalejs2.default.buildSandbox
}));

exports.default = sandbox;
//# sourceMappingURL=scalejs.sandbox.js.map