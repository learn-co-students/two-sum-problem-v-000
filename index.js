function bruteForceTwoSum(array, sum) {
  let sumArrays = []

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        sumArrays.push([array[i], array[j]]);
      }
    }
  }

  return sumArrays;
}

function binarySearchTwoSum(array, sum) {
  let sortedArray = array.sort();
  let sumArrays = [];

  for (let i = 0; i < sortedArray.length; i++) {
    let missingNum = sum - sortedArray[i];
    let match = binaryMatch(sortedArray, missingNum);

    if (match) {
      sumArrays.push([sortedArray[i], missingNum]);
    }
  }

  return sumArrays.splice(0, sumArrays.length/2);
}

function binaryMatch(sortedArray, missingNum) {
  let min = 0;
  let max = sortedArray.length - 1;

  while (min <= max) {
    let guess = Math.floor((min + max) / 2);

    if (sortedArray[guess] === missingNum) {
      return true;
    } else {
      if (sortedArray[guess] < missingNum) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  return false
}

function hashTwoSum(array, sum) {
  let sumArrays = [];
  let hashTable = {};

  for (let i = 0; i < array.length; i++) {
    let numberNeeded = sum - array[i];

    // Convert to string because keys are strings
    if (hashTable[numberNeeded.toString()] !== undefined) {
      sumArrays.push([numberNeeded, array[i]]);
    }

    hashTable[array[i].toString()] = array[i];
  }

  return sumArrays;
}
