function bruteForceTwoSum(array, sum) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) == sum) {
        result.push([array[i], array[j]]);
      }
    }
  }
  return result;
}

function merge(array1, array2) {
  let result = [];

  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    let min = array1[i] < array2[j] ? array1[i++] : array2[j++];
    result.push(min);
  }

  return result.concat(array1.slice(i,array1.length))
        .concat(array2.slice(j, array2.length));
}

function mergeSort(array) {
  if (array.length == 1) return array;

  let left = array.slice(0, array.length/2);
  let right = array.slice(array.length / 2, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function binaryMatch(array, value) {
  if (array.length ==  1) {
    return (array[0] == value);
  }

  let mid = array[Math.floor(array.length / 2)];
  let left = array.slice(0,array.length/2);
  let right = array.slice(array.length / 2, array.length);
  if (mid > value) {
    return binaryMatch(left,value);
  } else if (mid < value) {
    return binaryMatch(right,value);
  } else if (mid == value) {
    return true;
  }
}

function binarySearchTwoSum(array, sum) {
  let result = [];
  let sorted = mergeSort(array);

  for(let i = 0; i < sorted.length; i++) {
    let difference = sum - sorted[i];
    let arrayToSearch = sorted.slice(i + 1, sorted.length);
    if (binaryMatch(arrayToSearch, difference)) {
      result.push([ sorted[i], difference ])
    }
  }
  return result;
}

function hashTwoSum(sorted, sum) {
  let result = [];
  let hash = {};

  sorted.map(element => hash[element] = true)
  for(let i = 0; sorted[i] <= sum / 2; i++) {
    let difference = sum - sorted[i]
    if (hash[difference]) {
      result.push([sorted[i], difference])
    }
  }
  return result;
}