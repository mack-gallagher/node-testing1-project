const utils = require('./index.js');

const result = utils.trimProperties({ '  name ': 'mack', '  age ':21 });

console.log(`result:`);
console.log(result)
