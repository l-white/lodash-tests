const _ = {
  clamp(number, lower, upper){
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end){
    if (end === undefined){
      end = start;
      start = 0;
    }
    if (start > end){
      let tempValue = end;
      end = start;
      start = tempValue;
    }
    return (number >= start && number < end ? true : false);
  },
  words(string){
    return string.split(" ");
  },
  pad(string, length){
    if(string.length >= length){
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length)/2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  return paddedString;
  },
  has(object, key){
    const hasValue = object[key];
    return (hasValue !== undefined ? true : false);
  },
  invert(object) {
    let invertedObject = {};
    let originalValue;
    for (let key in object) {
      originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate){
    let value;
    let predicateReturnValue;
    for (let key in object){
      value = object[key];
      predicateReturnValue = predicate(value);
      if(predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, number){
    let newArray = [];
    if(number === 0){
      return array;
    } 
    for(i = 0; i < array.length; i++){
      if(number === undefined || number === 1){
        newArray = array.shift();
      }
      newArray = array.slice(number);
    }
    return newArray;
  },
  dropWhile(array, predicate){
    const callback = (element, index) => {
      return !predicate(element, index, array)
    };
    let dropNumber = array.findIndex(callback);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size=1){
    let arrayChunks = [];
    for(let i = 0; i < array.length; i += size){
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
