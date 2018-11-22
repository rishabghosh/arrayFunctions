const map = function(internalFunc, sourceArray) {
    let result = [];
    for (let index = 0; index < sourceArray.length; index++) {
        result.push(internalFunc(sourceArray[index]));
    }
    return result;
};

const reduce = function(sourceArray, internalFunc, initial) {
    let range = 0;
    if (initial === undefined) {
        initial = sourceArray[0];
        range = 1;
    }
    let acc = initial;
    for (let index = range; index < sourceArray.length; index++) {
        acc = internalFunc(acc, sourceArray[index]);
    }
    return acc;
};


exports.map = map;
exports.reduce = reduce;