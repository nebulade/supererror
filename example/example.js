/* jslint node:true */

require('../index.js');

console.error('foobar', { foo: 1234 }, new Error('some error'), new Error('another issue'));