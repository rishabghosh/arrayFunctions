const map = function(internalFunc, sourceArray){
  let result = [];
  for(let index = 0; index < sourceArray.length; index ++){
    result.push( internalFunc(sourceArray[index]) );
  }
  return result;
}


exports.map = map;
