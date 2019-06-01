function bruteForceTwoSum(array, sum) {
  const pairs = [];

  for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === sum) pairs.push([array[i], array[j]]);
    }
  }

  return pairs;
}

function binarySearchTwoSum(array, sum) {
  array = array.sort();
  const pairs = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (binaryMatch(array.slice(i+1), sum - array[i])) pairs.push([array[i], sum - array[i]]);
  }

  return pairs;
}

function hashTwoSum(array, sum) {
  const seen = {};
  const pairs = [];

  for (let i = 0; i < array.length; i++) {
    if (seen[sum - array[i]]) pairs.push([sum - array[i], array[i]]);
    seen[array[i]] = true;
  }

  return pairs;
}

function binaryMatch(sortedArray, num) {
  let start = 0;
  let stop = sortedArray.length - 1;

  let middle = Math.floor((start + stop) / 2);

  while ((start < stop) && (sortedArray[middle] !== num)) {
    if (num < sortedArray[middle]) stop = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + stop) / 2);
  }

  return sortedArray[middle] === num;
}
