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

console.error('foobar', { foo: 1234 }, new Error('error'), new Error('issue'));

```

Results in

![Screenshot](http://i.imgur.com/fvb4fGT.png)
