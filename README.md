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

```
Fri, 25 Jul 2014 00:08:55 GMT ERROR foobar { foo: 1234 } some error another issue [ example/example.js:5:9 ]
some error Error: some error
    at Object.<anonymous> (supererror/example/example.js:5:40)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:906:3
another issue Error: another issue
    at Object.<anonymous> (supererror/example/example.js:5:65)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:906:3
```