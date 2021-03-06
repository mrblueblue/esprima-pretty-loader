# esprima-pretty-loader

Print or write out your code's AST in a pretty manner

## Installing

```javascript
npm install
```
## How to Use

Add it as a loader in your webpack config.

Support flags are `write`, `print`, and `export`. Their defaults are `false`, `true`, and `false`, respectively.

The `export` flag will make your AST an exportable object that you can `require` in.

```javascript
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel', 'esprima-pretty?write']
    }
  ]
},

```
The above example will print out your code's AST as well as writing it to a file.

To turn off printing and only write to a file, set the loader as `esprima-pretty?+write,-print`.

Note: this loader does not modify your source code. It only console.logs it and / or writes it to a file.

## Supported Syntax

ES5, ES6, and JSX
