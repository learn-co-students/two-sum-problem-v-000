function bruteForceTwoSum(array, sum) {
  let combos = [];
  for (let i = 0; i < array.length; i++) {
    let b = sum - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === b) {
        let winningPair = [array[i], b];
        combos.push(winningPair);
      }
    }
  }
  return combos.length > 0 ? combos : "No Matching Results"
}

function binarySearchTwoSum(array, sum) {
  let combos = [];
  const sortedArray = mergeSort(array);
  for (let i = 0; i < sortedArray.length - 1; i++) {
    let b = sum - sortedArray[i],
        remainingArray = sortedArray.slice(i + 1);
    binaryMatch(remainingArray, b) ? combos.push([sortedArray[i], b]) : null
  }
  return combos;
}

function binaryMatch(sortedArray, searchElement) {
  let middleValue = sortedArray.length / 2 | 0,
      newArray;
  if (searchElement === sortedArray[middleValue]) {
    return true
  } else {
    if (middleValue > 0) {
      if (searchElement < sortedArray[middleValue]) {
        newArray = sortedArray.slice(0, middleValue);
        return binaryMatch(newArray, searchElement);
      } else {
        newArray = sortedArray.slice(middleValue + 1);
        return binaryMatch(newArray, searchElement);
      }
    }
  }
}

function hashTwoSum(array, sum) {
  let hash = {},
      combo = [];
  array.forEach((number, index) => !hash[number] ? hash[number] = 1 : hash[number] += 1);
  for (let number of array) {
    let difference = sum - number;
    hash[number] -= 1;
    hash[difference] > 0 ? combo.push([number, difference]) : null
  }
  return combo;
}



// MergeSort Algorithm

function mergeSort(unsorted) {
  let median = unsorted.length/2,
      firstHalf = unsorted.slice(0, median),
      secondHalf = unsorted.slice(median, unsorted.length),
      sorted;
  if (unsorted.length < 2) {
    return unsorted;
  } else {
     sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted;
}

function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstSubarray, secondSubArray) {
  let sorted = [];
  while(firstSubarray.length !== 0 && secondSubArray.length !== 0) {
    if (firstSubarray[0] < secondSubArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstSubarray));
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray));
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}
