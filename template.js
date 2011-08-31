// template.js

// ADSAFE.lib is passed a module name and a function that returns a library
// object that the widget can use.

ADSAFE.lib("template", function () {
    'use strict';

// This is where the code for the library module is placed. It cannot
// access the document unless the guest code passes the dom parameter
// to its methods.

    return {

// Return an object containing the library module's privileged methods.
// The program can get access to this object at lib.template.

    };
});
