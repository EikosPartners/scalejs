/*global define*/
/*jslint unparam:true*/
define([
    'scalejs.core',
    'scalejs.extensions'
],function (core) {
    
    'use strict';
    
    // create a sandbox to shim existing requires
    // give ability to generate new sandbox if desired.
    var sandbox = core.buildSandbox('main', core.object.merge({
        buildSandbox: core.buildSandbox
    }));
    
    return sandbox;
});