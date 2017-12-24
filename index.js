// Take every element and check every other element to see if it adds up to sum
function bruteForceTwoSum(array, sum) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (sum - array[j] === array[i]) {
        result.push([array[i], array[j]]);
      }
    }
  }
  return result;
}

// Sort array, then use binary search to see if sum - array[i] exists
function binarySearchTwoSum(array, sum) {
  array.sort((a, b) => a - b);
  let map = []
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let num = sum - array[i];
    if (binaryMatch(array, num) && !map.includes([array[i], num].sort().join(','))) {
      result.push([array[i], num])
      map.push([array[i], num].sort().join(','))
    }
  }
  return result;
}

function binaryMatch(array, key) {
  let middleIndex = Math.floor(array.length / 2);
  let middleElement = array[middleIndex];
  
  if (middleElement === key) { 
    return true; 
  }

  if (middleElement < key && array.length > 1) {
    return binaryMatch(array.slice(middleIndex), key);
  } else if (middleElement > key && array.length > 1) {
    return binaryMatch(array.slice(0, middleIndex), key);
  } else {
    return false;
  }
}

function hashTwoSum(array, sum) {
  let tmp; 
  let map = {};
  let result = [];
  array.forEach((n, index) => { map[n] = index });

  for (let i = 0; i < array.length; i++) {
    tmp = sum - array[i];
    if (map[tmp] !== undefined && map[tmp] !== map[i]) {
      result.push([array[i], tmp])
    }
  }

  return result;
}