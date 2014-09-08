/* jslint node:true */

'use strict';

require('colors');

var util = require('util');

var options = {
    errorTag: 'ERROR'.red.bold,
    timestamp: false
};

var originalError = console.error;
console.error = function () {
    var args = options.errorTag ? [String(options.errorTag)] : [];
    var arg = null;

    if (options.timestamp) args.push((new Date()).toISOString().bold);

    // convert arguments into real Array
    var tmp = [];
    for (arg in arguments) tmp.push(arguments[arg]);

    // just print empty logs like this
    if (tmp.length === 0) {
        originalError();
        return;
    }

    // check for string interpolation
    if (tmp[0]) {
        var match = String(tmp[0]).match(/%[sdj]/g);
        if (match) {
            args.push(util.format.apply(null, tmp.slice(0, match.length + 1)));
            tmp = tmp.slice(match.length + 1);
        }
    }

    // extract errors
    var errors = [];
    for (arg in arguments) {
        if (arguments[arg] instanceof Error) {
            errors.push(arguments[arg]);
        }
    }

    for (arg in tmp) {
        if (tmp[arg] instanceof Error) {
            args.push(tmp[arg].message);
        } else {
            args.push(tmp[arg]);
        }
    }

    var pos = new Error().stack.split('\n')[2];
    if (pos.indexOf('(') >= 0) pos = pos.slice(pos.indexOf('(') + 1).replace(')', '');
    if (pos.indexOf(' at ') >= 0) pos = pos.slice(pos.indexOf(' at ') + 4);
    args.push(String('[ ' + pos + ' ]').bold);

    if (errors.length > 0) args = args.concat(errors.map(function (e) {
        return '\n' + (e.message ? e.message : '').italic.bold + ' ' + e.stack.grey;
    }));

    originalError.apply(console, args);
};

module.exports = exports = function (_options) {
    if (typeof _options !== 'object') return;
    if (_options instanceof Array) return;

    for (var p in _options) {
        options[p] = _options[p];
    }
};
