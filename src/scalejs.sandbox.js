/*global define*/
/*jslint unparam:true*/
import core from 'scalejs.core';
import 'scalejs.extensions';
    
    
    
    // create a sandbox to shim existing requires
    // give ability to generate new sandbox if desired.
    var sandbox = core.buildSandbox('main', core.object.merge({
        buildSandbox: core.buildSandbox
    }));
    
    export default sandbox;
