const assert = require('assert');
const {
  map,
  reduce,
  filter,
  recursiveReduce
} = require('../src/arrayFunctionsLib.js');

/* --------- Internal Functions --------- */

const add5 = function(number) {
  return number + 5;
};

const add = function(num1, num2) {
  return num1 + num2;
};

const square = function(number) {
  return number * number;
};

const cube = function(number) {
  return square(number) * number;
};

const makeConstant = (x) => () => x;

const isEven = function(number) {
  return number % 2 == 0;
};

/* -------- Testing Map Function -------- */

describe("Testing map():\n", function() {

  describe("With an empty array:", function() {
    it("should return an empty array", function() {
      assert.deepEqual(map(add5, []), []);
      assert.deepEqual(map(square, []), []);
      assert.deepEqual(map(cube, []), []);
    });
  });

  describe("with array of 1 element", function() {
    it("should preserve the length of array", function() {
      assert.deepEqual(map(add5, [1]), [6]);
      assert.deepEqual(map(square, [2]), [4]);
      assert.deepEqual(map(cube, [2]), [8]);
    });
  });

  describe("with an array of multiple elements", function() {
    it("should preserve the length of array", function() {
      assert.deepEqual(map(add5, [1, 2, 3]), [6, 7, 8]);
      assert.deepEqual(map(cube, [0, 1, 2, 3]), [0, 1, 8, 27]);
      assert.deepEqual(map(square, [1, 2, 3, 4, -1, -2, -3]), [1, 4, 9, 16, 1, 4, 9]);
    });
  });

});

/* ------- Testing Reduce Function --------- */

describe("\n  Testing reduce():\n", function() {

  describe("With an empty array & initial", function() {
    it("should return initial", function() {
      assert.equal(reduce([], add, 5), 5);
    });
  });

  describe("With an array of 1 element, no initial", function() {
    it("should return that element", function() {
      assert.equal(reduce([5], add), 5);
    });
  });

  describe("With an array of 1 element & initial", function() {
    it("should return reduced result", function() {
      assert.equal(reduce([10], add, 5), 15);
    });
  });

  describe("With an array of multiple elements, no initial", function() {
    it("should return reduced result of all the elements", function() {
      assert.equal(reduce([1, 2], add), 3);
      assert.equal(reduce([1, 2, 3, 4, 5], add), 15);
    });
  });

  describe("With an array of multiple elements & initial", function() {
    it("should return reduced result of all the elements", function() {
      assert.equal(reduce([1, 2], add, 5), 8);
      assert.equal(reduce([1, 2, 3, 4, 5], add, 10), 25);
    });
  });

});

/* ------ Testing Filter Function ---------- */

describe('\n  Testing filter():\n', function() {

  describe("With empty array", function() {
    it('should return empty array', function() {
      assert.deepEqual(filter(makeConstant(true), []), []);
      assert.deepEqual(filter(isEven, []), []);
    });
  });

  describe("With array of 1 truthy value", function() {
    it('should return array of that value', function() {
      assert.deepEqual(filter(makeConstant(true), [1]), [1]);
      assert.deepEqual(filter(isEven, [2]), [2]);
    });
  });

  describe("With array of 1 falesy value", function() {
    it('should return empty array', function() {
      assert.deepEqual(filter(makeConstant(false), [1]), []);
      assert.deepEqual(filter(isEven, [1]), []);
    });
  });

  describe("With multiple element array", function() {
    it('should return array of elements fulfiling predicator', function() {
      assert.deepEqual(filter(makeConstant(true), [2, 3, 5]), [2, 3, 5]);
      assert.deepEqual(filter(isEven, [1, 2]), [2]);
      assert.deepEqual(filter(isEven, [1, 2, 3, 4, 5, 6]), [2, 4, 6]);
    });
  });

});


/* ------ Testing recursiveReduce Function -------- */

describe("\n  Testing recursiveReduce():\n", function() {

  describe("With an empty array & initial", function() {
    it("should return initial", function() {
      assert.equal(recursiveReduce([], add, 5), 5);
    });
  });

  describe("With an array of 1 element, no initial", function() {
    it("should return that element", function() {
      assert.equal(recursiveReduce([5], add), 5);
    });
  });

  describe("With an array of 1 element & initial", function() {
    it("should return reduced result", function() {
      assert.equal(recursiveReduce([10], add, 5), 15);
    });
  });

  describe("With an array of multiple elements, no initial", function() {
    it("should return reduced result of all the elements", function() {
      assert.equal(recursiveReduce([1, 2], add), 3);
      assert.equal(recursiveReduce([1, 2, 3, 4, 5], add), 15);
    });
  });

  describe("With an array of multiple elements & initial", function() {
    it("should return reduced result of all the elements", function() {
      assert.equal(recursiveReduce([1, 2], add, 5), 8);
      assert.equal(recursiveReduce([1, 2, 3, 4, 5], add, 10), 25);
    });
  });

});
