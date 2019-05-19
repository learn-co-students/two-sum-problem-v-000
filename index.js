let bruteForceTwoSum = (array, sum) => {
  let twoSums = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] == sum - array[i]) {
        twoSums.push([array[i], array[j]])
      }
    }
  }
  return twoSums;
}

let binarySearchTwoSum = (array, sum) => {
  let twoSums = [];
  array.sort()
  array.forEach((int) => {
    if (binaryMatch(array, sum - int) === true) {
      twoSums.push([int, sum - int])
    }
  })
  return twoSums;
}

let binaryMatch = (sortedArray, num) => {
  return sortedArray.includes(num)
}

let hashTwoSum = (array, sum) => {
  let hash = {};
  let twoSums = [];
  for (let i = 0; i < array.length; i++) {
    let complement = sum - array[i];
    if(hash[complement]) {
      twoSums.push([hash[complement], array[i]])
    } 
    hash[array[i]] = array[i]
  }
  return twoSums;
}