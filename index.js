var fs = require('fs');
var esprima = require('esprima-fb');
var loaderUtils = require('loader-utils');
var R = require('ramda');

module.exports = function(source){

  var query = loaderUtils.parseQuery(this.query);

  var options = {
    print: query.print || true,
    write: query.write || false
  }

  if (this.cacheable) {
    this.cacheable();
  }

  var ast = esprima.parse(source, {
    tolerant: true,
    loc: true,
    range: true
  });

  if (options.print) {
    console.log(JSON.stringify(ast, null, 2));
  }

  if (options.write) {
    var resourceFileName = R.last(R.split('/', this.resourcePath));
    var outputFileName = 'ast-' + resourceFileName;
    var prettyOutput = JSON.stringify(ast, null, '\t');
    fs.writeFileSync(outputFileName, prettyOutput);
  }

  return source;
}
