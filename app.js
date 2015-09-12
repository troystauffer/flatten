var f = require(__dirname + '/lib/flatten');

var input = process.argv[2];
var arr = JSON.parse(input);
if (Array.isArray(arr)) {
  console.log('Flattening the following input: ' + input);
  var result = f.flatten(arr);
  console.log(result);
}
