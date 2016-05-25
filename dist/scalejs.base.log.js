'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scalejsBase = require('./scalejs.base.object');

var _scalejsBase2 = _interopRequireDefault(_scalejsBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Workaround for IE8 and IE9 - in these browsers console.log exists but it's not a real JS function.
// See http://stackoverflow.com/a/5539378/201958 for more details

/*jslint sub:true*/
/**
 * Aliases the built in console log function for IE support
 *
 * @property log
 * @type Function
 * @memberOf log
 * @private
 */
var log = Function.prototype.call.bind(console['log'], console),


/**
 * Detects if the current browser is IE
 *
 * IMPORTANT: the method for obtaining this information is
 *            subject to change and this functionality may
 *            break at any time
 *
 * @property IE
 * @type Boolean
 * @memberOf log
 * @private
 */
IE = navigator.userAgent.indexOf('MSIE') > 0 || navigator.userAgent.indexOf('Trident') > 0;

/*jslint sub:false*/

/**
 * Creates a new log function with the passed level
 * @private
 *
 * @param {String} level log level
 * @memberOf log
 * @return {Function} decorated log function
 */
/**
 * Provides logging functionality to scalejs base
 * @namespace scalejs.base
 * @module log
 */

/*global define,console,navigator*/
function create(level) {
    return function () {
        var args, outstring;

        args = Array.prototype.slice.call(arguments, 0);

        if (!IE) {
            args.unshift(level);
        } else {
            outstring = level + ' ';
            args.forEach(function (arg) {
                outstring += _scalejsBase2.default.stringify(arg) + ' ';
            });
            args = [outstring];
        }

        log.apply(this, arguments);
    };
}

/**
 * Formats an exception for better output
 *
 * @param {Object} ex exception object
 * @memberOf log
 * @return {String} formatted exception
 */
function formatException(ex) {
    var stack = ex.stack ? String(ex.stack) : '',
        message = ex.message || '';
    return 'Error: ' + message + '\nStack: ' + stack;
}

exports.default = {
    /**
     * Logs to the console with no level
     * @method log
     * @param {Any} [message...] items to print to the console
     * @memberOf log
     */
    log: create('      '),
    /**
     * Logs to the console with info level
     * @method info
     * @param {Any} [message...] items to print to the console
     * @memberOf log
     */
    info: create('info: '),
    /**
     * Logs to the console with error level
     * @method error
     * @param {Any} [message...] items to print to the console
     * @memberOf log
     */
    error: create('error:'),
    /**
     * Logs to the console with warn level
     * @method warn
     * @param {Any} [message...] items to print to the console
     * @memberOf log
     */
    warn: create('warn: '),
    /**
     * Logs to the console with debug level
     * @method debug
     * @param {Any} [message...] items to print to the console
     * @memberOf log
     */
    debug: create('debug:'),
    /** */
    formatException: formatException
};