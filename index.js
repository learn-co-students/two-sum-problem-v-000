function bruteForceTwoSum(array, target) {
  var pairs = [];

  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      const currentVal = array[i];
      const nextVal = array[j];

      if ((currentVal + nextVal) == target) {
        pairs.push([currentVal, nextVal]);
      }
    }
  }
  return pairs;
}

function hashTwoSum(array, target) {
  const pairs = [];
  const hash = {};
  
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    
    if (hash[array[i]] !== true) {
      hash[array[i]] = null;
    }
    if (hash[complement] === null) {
      hash[complement] = true;
    }
  }
  
  Object.keys(hash).filter(key => hash[key] == true)
  .map(key => {
    const complement = target - key;
    pairs.push([parseInt(key), complement])
  })
  
  return pairs;
}

function binarySearchTwoSum(array, sum) {}

function binaryMatch(array, num) {
  var mid = Math.floor(array.length / 2);
  var first = array[0];
  var last = array[array.length - 1];

  if (array.length <= 1) {
    return array;
  }

  if (array[mid] == num) {
    return true;
  } else if (array[mid] > num) {
    return binaryMatch(array.slice(first, mid), num);
  } else {
    return binaryMatch(array.slice(mid), num);
  }
}