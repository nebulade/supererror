supererror
==========

This module provides colorful error logging. When included, it intercepts console.error.
It will print the file and line number where console.error() was called.
Any Error object passed into it as an argument, will be printed as a string, as well as
the callstacks for all Error objects are printed at the end.

Usage
-----

```javascript
require('supererror');

console.error('Some', new Error('transient error'), 'happened using', { some: 'value' });
console.error();     // no info added
console.error('Using %d as a %s.', 42, 'number');
```

Results in

![Screenshot](http://i.imgur.com/8DwaEru.png)

Options
-------

The module actually exports a function, which can be used to modify the behavior.

```javascript
require('supererror')({ errorTag: '[HAPPY]'.rainbow });
require('supererror')({ timestamp: true });
```

Available options:

 * **errorTag** Change the error tag string. Use `null` or and empty string to not log an error tag. Default: `'[ERROR]'.red`
 * **timestamp** Add the current timestamp in ISO string format . Default: `false`

