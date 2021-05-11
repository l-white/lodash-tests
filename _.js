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
  as(object, key){
    const hasValue = object[key];
    if(hasValue !== undefined){
      return true;
    } else {
      return false;
    }
  }
};

module.exports = _;
