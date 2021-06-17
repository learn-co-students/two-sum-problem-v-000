function bruteForceTwoSum(arr, sum) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === sum - arr[i]) {
        nums.push([arr[i], arr[j]]);
      }
    }
  }
  return nums;
}

function binarySearchTwoSum(arr, sum) {
  let sorted = arr.sort(),
    nums = [],
    indices = {};

  for (let i = 0; i < sorted.length; i++) {
    let diff = sum - sorted[i],
      binIndex = binarySearch(sorted, diff);
    if (binIndex && !indices[i] && !indices[binIndex]) {
      nums.push([sorted[i], sorted[binIndex]]);
      indices[i] = true;
      indices[binIndex] = true;
    }
  }
  return nums;
}

function binarySearch(sortedArray, num) {
  let start = 0,
    end = sortedArray.length - 1,
    mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (num === sortedArray[mid]) {
      return mid;
    } else if (num < sortedArray[mid]) {
      end = mid - 1;
    } else if (num > sortedArray[mid]) {
      start = mid + 1;
    }
  }
  return false;
}

function binaryMatch(sortedArray, num) {
  let start = 0,
    end = sortedArray.length - 1,
    mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (num === sortedArray[mid]) {
      return true;
    } else if (num < sortedArray[mid]) {
      end = mid - 1;
    } else if (num > sortedArray[mid]) {
      start = mid + 1;
    }
  }
  return false;
}

function hashTwoSum(arr, sum) {
  let hashMap = {},
    nums = [];

  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) {
      nums.push([hashMap[arr[i]], arr[i]]);
    } else {
      hashMap[sum - arr[i]] = arr[i];
    }
  }
  return nums;
}
