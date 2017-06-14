function bruteForceTwoSum(arr, sum) {
  let found = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) { found.push([arr[i],arr[j]]) };
    }
  }

  return found;
}

function merge(first, second) {
  let sorted = [];

  while (first.length && second.length) {
    first[0] <= second[0] ? sorted.push(first.shift()) : sorted.push(second.shift());
  }

  return sorted.concat(first).concat(second);
}

function mergeSort(arr) {
  if (arr.length < 2) { return arr };

  let middle = arr.length / 2 | 0;
  let leftArray = arr.slice(0, middle);
  let rightArray = arr.slice(middle, arr.length);

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function binarySearch(arr, key) {
  let length = arr.length;
  if (length === 0) { return false };

  let start = 0;
  let end = length - 1;

  while (start != end) {
    let middle = start + ((end - start) / 2 | 0);

    if (arr[middle] === key) {
      return arr[middle];
    } else if (arr[middle] < key) {
      start = middle;
      middle = start + Math.round((end - start) / 2);
    } else if (arr[middle] > key) {
      end = middle;
      middle = start + ((end - start) / 2 | 0);
    }
  }

  return false;
}

function binarySearchTwoSum(arr, sum) {
  const sorted = mergeSort(arr);
  let sliced = sorted;
  let pairs = []

  sorted.forEach(n => {
    let complement = sum - n;
    sliced = sliced.slice(1, sliced.length);

    if (binarySearch(sliced, complement)) { pairs.push([n, complement]) };
  });

  return pairs;
}

function binaryMatch(arr, missing) {
  if(binarySearchTwoSum(arr, missing)) { return true };
}

function hashTwoSum(arr, sum) {
  let pairs = [];
  let hashTable = new Map();

  arr.forEach((n, index) => {
    if (!hashTable.get(n)) { hashTable.set(n, index)}
  });

  hashTable.forEach((value, key) => {
    const complement = sum - key;
    const pair = [key, complement].sort();
    if (hashTable.get(complement)) { pairs.push(pair) };
  });

  return pairs;
}
