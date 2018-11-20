const objKeyMap = function(internalFunc, sourceObj){
  let result = {};
  let allKeys = Object.keys(sourceObj);
  let mappedKeys = allKeys.map(internalFunc);
  for(let index = 0; index < allKeys.length; index++){
    result[mappedKeys[index]] = sourceObj[allKeys[index]];
  }
  return result;
}

exports.objKeyMap = objKeyMap;
