/* jslint node:true */

'use strict';

require('../index.js')({ splatchError: true });

var e = new Error('Top level error');
e.inner = new Error('Inner error');
e.inner.inner = new Error('Inner most error');

console.error('Bad things happenned because of', e);

