const assertEq = require('assert').deepEqual;
const {objKeyMap,
  objValueMap} = require('../src/mappingObjectLib.js');

const add5 = function(number){
  return number+5;
};

/* ------ Generate Log ------- */

const generateLog = function(input, expected, actual){
  console.log("For input : ", input);
  console.log("expected :\n", expected);
  console.log("actual :\n", actual);
  console.log("------------");
};

/* ------ Test objKeyMap ------- */

const testObjKeyMap = function(internalFunc, sourceObj, expected){
  let actual = objKeyMap(internalFunc, sourceObj);
  generateLog({internalFunc,sourceObj}, expected, actual);
  assertEq(actual, expected);
};

{
  testObjKeyMap(add5, {}, {});
  testObjKeyMap(add5, {a:1 },{a5: 1});
  testObjKeyMap(add5, {a:1, b:2}, {a5:1, b5:2});
}


/* -------- Test objValueMap ---------- */

const testObjValueMap = function(internalFunc, sourceObj, expected){
  let actual = objValueMap(internalFunc, sourceObj);
  generateLog({internalFunc,sourceObj}, expected, actual);
  assertEq(actual, expected);
};

{
  testObjValueMap(add5, {}, {});
  testObjValueMap(add5, {a:1 },{a: 6});
  testObjValueMap(add5, {a:1, b:2}, {a:6, b:7});
}
