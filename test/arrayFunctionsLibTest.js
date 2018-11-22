const assert = require('assert');
const {
    map,
    reduce
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

/* -------- Testing Map Function -------- */

describe("Testing map():", function() {

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

describe("Testing reduce():", function() {
    it("an empty array & initial", function() {
        assert.equal(reduce([], add, 5), 5);
        console.log("\n   add() with:");
    });

    it("an array having number, no initial", function() {
        assert.equal(reduce([5], add), 5);
    });

    it("an array having number & initial", function() {
        assert.equal(reduce([10], add, 5), 15);
    });

    it("an array with multiple numbers, no initial", function() {
        assert.equal(reduce([1, 2], add), 3);
        assert.equal(reduce([1, 2, 3, 4, 5], add), 15);
    });

    it("an array with multiple numbers & initial", function() {
        assert.equal(reduce([1, 2], add, 5), 8);
        assert.equal(reduce([1, 2, 3, 4, 5], add, 10), 25);
    });

});