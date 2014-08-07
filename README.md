supererror
==========

This module provides colorful error logging. When included, it overwrites console.error.
It will print the timestamp, file and line number when console.error() was called.
Any Error object passed into it as an argument, will be printed as a string, as well as
the callstacks for all Error objects is printed at the end.

Usage
-----

```javascript

require('supererror');

console.error('Some', new Error('transient error'), 'happened using', { some: 'value' });
console.error();     // no info added
console.error('Using %d as a %s.', 42, 'number');

```

Results in

![Screenshot](http://i.imgur.com/FSNNrCG.png)
