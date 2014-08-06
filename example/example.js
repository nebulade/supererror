/* jslint node:true */

'use strict';

require('../index.js');

console.error('foobar', { foo: 1234 }, new Error('some error'), new Error('another issue'));

function foobar(callback) {
    callback(new Error('some error'));
}

foobar(function (error) {
    console.error(error);
});

console.error('Found %d issues %s %j %s and an object %j', 2, 'error', new Error('a cat'), 'not a dog', { foo: 1 }, 'additional logs');
console.error();
console.error('Found %d more issues', 5, 'in the code');