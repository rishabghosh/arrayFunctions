const assertEq = require('assert').deepEqual;
const {objKeyMap} = require('./mappingObject.js');

const add5 = function(number){
  return number+5;
}

{
  sourceObj = {a:1};
  expectedOutput = {a5 : 1};
  assertEq( objKeyMap(add5, sourceObj), expectedOutput);
}
{
  sourceObj = {a: 1, b: 2};
  expectedOutput = {a5: 1, b5: 2};
  assertEq( objKeyMap(add5, sourceObj), expectedOutput);
}

console.log("tests for objKeyMap passed");
/*
{
  sourceObj = {a:1};
  expectedOutput = {a:6};
  assertEq( objValueMap(add5, sourceObj), expectedOutput);
}

console.log("tests for objValueMap passed");
*/
