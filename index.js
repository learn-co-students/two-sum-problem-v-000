function bruteForceTwoSum(array, sum) {
  let sums = [];

  for (let i = 0; i < array.length; i++) {
    let rest = array.concat()
    rest.splice(i, 1)

    for (let j = 0; j < rest.length; j++) {

      if (array[i] + rest[j] === sum) {

        let pair = [array[i], rest[j]];
        sums.push(pair)
        array.splice(i, 1)
      }
    }
  }

  return sums;
}

function binarySearchTwoSum(array, sum) {
  let sortedArray = mergeSort(array);

  let sums = [];

  sortedArray.forEach( function(number) {
    let complement = sum - number;

    if (binaryMatch(sortedArray, complement)) {
     sums.push([number, complement]);
    }

  });

  return sums.filter(removeDuplicates);

  function removeDuplicates(pair, i, array) {
    let rest = array.splice(i, 1)

    for (let pair2 in rest) {
      if (matchFound(pair, pair2)) {
        return false;
      }
    }
    return true;
  }

  function matchFound(pair1, pair2) {
    if (pair1 === pair2 ||
       ((pair1[0] === pair2[1]) && (pair1[1] === pair2[0]) )) {
      return true;
    } else {
      return false;
    }
  }
}

function binaryMatch(sortedArray, missingNum) {
  let start = 0;
  let end = sortedArray.length -1;

  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2)

    if (sortedArray[mid] === missingNum) {
      return true;
    }

    if (sortedArray[mid] < missingNum) {
      start = mid+1;
    } else {
      end = mid-1;
    }
  }

  return false;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let middleIndex = parseInt(array.length / 2)
  let firstHalf = array.slice(0, middleIndex);
  let secondHalf = array.slice(middleIndex)

  let sortedArray = merge(mergeSort(firstHalf), mergeSort(secondHalf))

  return sortedArray;
}

function merge(arr1, arr2) {
  let sorted = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      let num = arr1.shift();
      sorted.push(num);
    } else {
      let num = arr2.shift();
      sorted.push(num)
    }
  }

  return sorted.concat(arr1).concat(arr2)
}

function hashTwoSum(array, sum) {
  let solution = [];
  let cache = {};

  for (let num of array) {
    if (!cache[num]) {
     cache[num] = 1;
    } else {
     cache[num] = cache[num] + 1;
    }
  }

  let numRequired;

  for (let num of array) {
    let complement = sum - num;

    if (complement === num) {
      numRequired = 2;
    } else {
      numRequired = 1;
    }

    if (cache[num] > 0 && cache[complement] >= numRequired) {

      solution.push([num, complement])
      cache[num] = cache[num] - 1;
      cache[complement] = cache[complement] - 1;
    }
  }

  return solution;
}
