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
  invert (object) {
    let invertedObject = {};
    let originalValue;
    for (let key in object) {
      originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  }
};

module.exports = _;
