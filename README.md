# esprima-pretty-print-loader

Print or write out your code's AST in a pretty manner

## Installing

```javascript
npm install
```
## How to Use

Add it as a loader in your webpack config.

Support flags are `write` and `print`. Their defaults are `false` and `true`, respectively.

```javascript
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel', 'esprima-pretty-print?write']
    }
  ]
},

```
The above example will print out your code's AST as well as writing it to a file.

To turn off printing and only write to a file, set the loader as `esprima-pretty-print?+write,-print`.

Note: this loader does not modify your source code. It only console.logs it and / or writes it to a file.

## Supported Syntax

ES5, ES6, and JSX
