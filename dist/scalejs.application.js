'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scalejs = require('scalejs.core');

var _scalejs2 = _interopRequireDefault(_scalejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addOne = _scalejs2.default.array.addOne,
    toArray = _scalejs2.default.array.toArray,
    error = _scalejs2.default.log.error,
    debug = _scalejs2.default.log.debug,


/**
 * Holds modules that have been registered to the application
 * @property moduleRegistrations
 * @type Array
 * @memberOf applciation
 * @private
 */
moduleRegistrations = [],

/**
 * Holds instances of running modules
 * @property moduleInstances
 * @type Array
 * @memberOf applciation
 * @private
 */
moduleInstances = [];

/**
 * Registers a series of modules to the application
 *
 * @param {Function|Object} [module...] modules to register
 * @memberOf application
 */
/**
 * Application manages the life cycle of modules.
 * @namespace scalejs.application
 * @module application
 */

/*global define*/
function registerModules() {
    // Dynamic module loading is no longer supported for simplicity.
    // Module is free to load any of its resources dynamically.
    // Or an extension can provide dynamic module loading capabilities as needed.
    if (_scalejs2.default.isApplicationRunning()) {
        throw new Error('Can\'t register module since the application is already running.', 'Dynamic module loading is not supported.');
    }

    Array.prototype.push.apply(moduleRegistrations, toArray(arguments).filter(function (m) {
        return m;
    }));
}

/**
 * Creates a module instance from the passed framework
 * @private
 *
 * @param {Function|Object} module what to obtain an instance of
 * @memberOf application
 * @return the module instance
 */
function createModule(module) {
    var moduleInstance, moduleId;

    if (typeof module === 'function') {
        try {
            moduleInstance = module();
        } catch (ex) {
            if (module.getId) {
                moduleId = module.getId();
            } else {
                moduleId = module.name;
            }

            error('Failed to create an instance of module "' + moduleId + '".', 'Application will continue running without the module. ' + 'See following exception stack for more details.', ex.stack);
        }
    } else {
        moduleInstance = module;
    }

    addOne(moduleInstances, moduleInstance);

    return moduleInstance;
}

/**
 * Creates all modules currently registered to this applciation
 * @private
 *
 * @memberOf application
 */
function createAll() {
    moduleRegistrations.forEach(createModule);
}

/**
 * Starts all of the attached module instances
 * @private
 *
 * @memberOf application
 */
function startAll() {
    debug('Application started.');

    _scalejs2.default.notifyApplicationStarted();
}

/**
 * Stops all of the attached module instances
 * @private
 *
 * @memberOf application
 */
function stopAll() {
    debug('Application exited.');

    _scalejs2.default.notifyApplicationStopped();
}

/**
 * Launches the application by creating all module instances
 * and launching them all
 *
 * @memberOf application
 */
function run() {
    createAll();
    startAll();
}

/**
 * Exits the application by stopping all running modules
 *
 * @memberOf application
 */
function exit() {
    stopAll();
}

exports.default = {
    registerModules: registerModules,
    run: run,
    exit: exit
};
//# sourceMappingURL=scalejs.application.js.map