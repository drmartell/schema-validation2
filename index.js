const { 
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean,
  castToArray,
} = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isString('3'));
console.log(isBoolean('3'));
console.log(isArray('3'));
console.log(isObject('3'));
console.log(getCaster(Number));
console.log(getCaster(String));
console.log(getCaster(Boolean));
console.log(getCaster(Array));
console.log(castToNumber('3'));
console.log(castToString('3'));
console.log(castToBoolean('3'));
console.log(castToArray('3'));
