/* jslint node:true */

require('colors');

console.error = function () {
    'use strict';

    var args = [new Date().toUTCString().cyan, 'ERROR'.red.bold];
    var errors = [];
    for (var arg in arguments) {
        if (arguments[arg] instanceof Error) {
            errors.push(arguments[arg]);
            args.push(arguments[arg].message);
        } else {
            args.push(arguments[arg]);
        }
    }

    var pos = new Error().stack.split('\n')[2].match(/\(.*\)/)[0].slice(1, -1).slice(__dirname.length+1);
    args.push(String('[ ' + pos + ' ]').bold);

    if (errors.length > 0) args = args.concat(errors.map(function (e) {
        return '\n' + e.message.italic.bold + ' ' + e.stack.grey;
    }));

    console.log.apply(console, args);
};

