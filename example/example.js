/* jslint node:true */

require('../index.js');

console.error('foobar', { foo: 1234 }, new Error('some error'), new Error('another issue'));

function foobar(callback) {
    callback(new Error('some error'));
}

foobar(function (error) {
    console.error(error);
});
