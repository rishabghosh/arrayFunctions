const assert = require('assert');
const {map,
  reduce} = require('./arrayFunctionsLib.js');

/* -------- Internal Functions --------- */

const add5 = function(number){
  return number+5;
}

const square = function(number){
  return number * number;
}

const cube = function(number){
  return square(number) * number;
}

/* ------ Logging ------- */

const generateLog = function(internalFunc, input, expected, actual){
  console.log("Mapping", input);
  console.log("With", {internalFunc});
  console.log("expected :\n", expected);
  console.log("actual :\n", actual);
  console.log("------------");
}

/* ------- Test Map ------- */

const testMap = function(internalFunc, input, expected){
  let actual = map(internalFunc, input);
  generateLog(internalFunc, input, expected, actual);
  assert.deepEqual(actual, expected);
}

{
  testMap(add5, [0], [5]);
  testMap(square, [0], [0]);
  testMap(square, [2], [4]);
  testMap(cube, [1,2,3], [1,8,27]);
  testMap(cube, [-1, 0, -2], [-1, 0, -8]);
  testMap(square, [-1, -2], [1,4]);
}


