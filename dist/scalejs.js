"use strict";

var _scalejs = require("./scalejs.core");

var _scalejs2 = _interopRequireDefault(_scalejs);

var _scalejs3 = require("./scalejs.application");

var _scalejs4 = _interopRequireDefault(_scalejs3);

var _scalejs5 = require("./scalejs.sandbox");

var _scalejs6 = _interopRequireDefault(_scalejs5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    core: _scalejs2.default,
    application: _scalejs4.default,
    sandbox: _scalejs6.default
};