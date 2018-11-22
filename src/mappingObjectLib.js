const extractValues = function(sourceObj) {
    let allKeys = Object.keys(sourceObj);
    let allValues = [];

    for (let index = 0; index < allKeys.length; index++) {
        allValues.push(sourceObj[allKeys[index]]);
    }
    return allValues;
};


const objKeyMap = function(internalFunc, sourceObj) {
    let result = {};
    let allKeys = Object.keys(sourceObj);
    let mappedKeys = allKeys.map(internalFunc);
    for (let index = 0; index < allKeys.length; index++) {
        result[mappedKeys[index]] = sourceObj[allKeys[index]];
    }
    return result;
};

const objValueMap = function(internalFunc, sourceObj) {
    let result = {};
    let allKeys = Object.keys(sourceObj);
    let allValues = extractValues(sourceObj);
    let mappedValues = allValues.map(internalFunc);

    for (let index = 0; index < allKeys.length; index++) {
        result[allKeys[index]] = mappedValues[index];
    }
    return result;
};

exports.objKeyMap = objKeyMap;
exports.objValueMap = objValueMap;