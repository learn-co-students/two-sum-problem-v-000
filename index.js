function bruteForceTwoSum(array, sum) {
  let pairs = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        pairs.push([array[i], array[j]]);
      }
    }
  }
  return pairs;
}

function binarySearchTwoSum(array, sum) {
  let pairs = [];
  array = array.sort();
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    let matchingNumber = sum - array[i];
    let targetArray = array.slice(i + 1);
    if (binaryMatch(targetArray, matchingNumber)) {
      pairs.push([array[i], matchingNumber]);
    }
  }
  return pairs;
}

function binaryMatch(array, number) {
  let middle = Math.floor(array.length/2);
  if (array[middle] === number) {
    return true;
  } else {
    if (middle > 0) {
      if (array[middle] < number) {
        let newArray = array.slice(middle + 1);
        return binaryMatch(newArray, number)
      } else if (array[middle] > number) {
        let newArray = array.slice(0, middle)
        return binaryMatch(newArray, number)
      } 
    } else {
      return false;
    } 
  }
}

function hashTwoSum(array, sum) {
  let hash = {};
  let pairs = [];
  array.forEach(function(number, index) {
    !hash[number] ? hash[number] = 1 : hash[number] += 1;
  })
  array.forEach(function(number) {
    let difference = sum - number; 
    hash[number] -= 1;
    if (hash[difference] > 0) {
      pairs.push([number, difference])
    }
  })
  return pairs
}