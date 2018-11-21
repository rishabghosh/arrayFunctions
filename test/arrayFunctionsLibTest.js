const assert = require('assert');
const {map,
  reduce} = require('../src/arrayFunctionsLib.js');

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

/* -------- Testing Map Function -------- */

describe("Testing map:", function(){

  it("an empty array", function(){
    assert.deepEqual( map(add5, []), []);
    console.log("\n   Testing add5() with:");
    //logs title before execution of this it block
  });

  it("an array having positive number", function(){
    assert.deepEqual( map(add5, [1]), [6]);
  });

  it("an array having negetive number", function(){
    assert.deepEqual( map(add5, [-5]), [0]);
  });

  it("an array having multiple numbers", function(){
    assert.deepEqual( map(add5, [1,2,3]), [6,7,8]);
  });
  
  it("an empty array", function(){
    assert.deepEqual( map(square, []), []);
    console.log("\n   Testing square() with:");
    //logs title before execution of this it block
  });

  it("an array having zero", function(){
    assert.deepEqual( map(square, [0]), [0]);
  });

  it("an array having one", function(){
    assert.deepEqual( map(square, [1]), [1]);
  });

  it("an array having positive number:", function(){
    assert.deepEqual( map(square, [2]), [4] );
  });

  it("an array having negetive number", function(){
    assert.deepEqual( map(square, [-2]), [4] );
  });

  it("an array having multiple numbers", function(){
    assert.deepEqual( map(square, [1,2,3,4,-1,-2,-3]), [1,4,9,16,1,4,9]);
  });

  it("an empty array", function(){
    assert.deepEqual( map(cube, []), []);
    console.log("\n   Testing cube() with:");
  });

  it("an array having positive number", function(){
    assert.deepEqual( map(cube, [2]), [8]);
  });

  it("an array having negetive number", function(){
    assert.deepEqual( map(cube, [-2]), [-8]);
  });

  it("an array having multiple, numbers", function(){
    assert.deepEqual( map(cube, [0,1,2,3]), [0,1,8,27]);
  });
  
});
