
var _ = require('lodash');
var array = ["aaa",1,1,2,2,3,4,4,"aaa"];

var uniqueArray = _.uniq(array);
console.log(uniqueArray);
