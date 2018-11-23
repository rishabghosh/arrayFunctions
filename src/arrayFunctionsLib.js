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

// constructs a new array of all the values for which callback returns a truthy value
const filter = function(internalFunc, sourceArray){
  let result = [];
  for(let index = 0; index < sourceArray.length; index ++){
    if( internalFunc(sourceArray[index]) ){
      result.push(sourceArray[index]);
    }
  }
  return result;
}

exports.map = map;
exports.reduce = reduce;
exports.filter = filter;
