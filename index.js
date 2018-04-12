
function bruteForceTwoSum(array, targetSum) {
  let solution = [];
  for (let i=0; i < array.length; i++) {
    let arrayToLeft = array.slice(i + 1);
    for (let j = 0; j< arrayToLeft.length; j++) {
      if (array[i] + arrayToLeft[j] === targetSum) {
        solution.push([array[i], arrayToLeft[j]]);
      }
    }
  }
  return solution
}

// let array = [5,0,4,1,3,2,-2,9,11,8];
// let target = 9;
// let answer = [[5,4],[0,9],[1,8],[-2,11]];
// console.log(JSON.stringify(answer) === JSON.stringify(bruteForceTwoSum(array,9)))

function binarySearchTwoSum(array, targetSum) {
  let combos = [];
  const sortedArray = mergeSort(array);
  for (let i=0; i < sortedArray.length; i++) {
    const targetVal = targetSum - sortedArray[i]
    const remainingArray = sortedArray.slice(i + 1)
    if (binaryMatch(remainingArray, targetVal)) {
      combos.push([sortedArray[i], targetVal])
    }
  }
  return combos;
}

function binaryMatch(sortedArray, searchElement) {
  if (sortedArray.length === 0) { return false; }
  const midPoint = Math.floor(sortedArray.length / 2);
  const rightSideFirstVal = sortedArray[midPoint];
  if (searchElement === rightSideFirstVal) {
    return true;
  } else if (searchElement > rightSideFirstVal){
    sortedArray = sortedArray.slice(midPoint + 1);
    return binaryMatch(sortedArray, searchElement);
  } else if (searchElement < rightSideFirstVal) {
    sortedArray = sortedArray.slice(0, midPoint);
    return binaryMatch(sortedArray, searchElement);
  }
}

function hashTwoSum(array, targetSum) {
  let hash = {};
  let combos = [];
  array.forEach((number, index) => {
    hash[number] = true;
  });
  array.forEach((number, index) => {
    const targetVal = targetSum - number;
    if (hash[targetVal]) {
      combos.push([number, targetVal]);
      delete hash[number];
      delete hash[targetVal];
    }
  });
  return combos;
}


// function findMinAndRemoveSorted(sortedArray) {
//   return sortedArray.shift();
// }

function merge(sortedA1, sortedA2) {
  let merged = [];
  while (sortedA1.length > 0 && sortedA2.length > 0) {
    if (sortedA1[0] < sortedA2[0]) {
      merged.push(sortedA1.shift());
    } else {
      merged.push(sortedA2.shift());
    }
  }
  return merged.concat(sortedA1).concat(sortedA2)
}

function mergeSort(unsortedArray) {
  let midPoint = unsortedArray.length / 2;
  let first = unsortedArray.slice(0, midPoint);
  let second = unsortedArray.slice(midPoint, unsortedArray.length);
  let sorted;
  if (unsortedArray.length > 1) {
    sorted = merge(mergeSort(first), mergeSort(second));
  } else {
    return unsortedArray;
  }
  return sorted;
}
