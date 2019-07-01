function bruteForceTwoSum(array, target) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                result.push([array[i],array[j]]);

            }
        }
    }
    return result;
}

function binarySearchTwoSum(array, sum) {
  let sortedArray = array.sort((a, b) => a - b);
  let sums = [];
  let startNum;
  let missingNum;
  let startInd;
  let filteredArray = sortedArray;

  while (filteredArray.length > 1) {
    startInd = Math.floor(filteredArray.length/2);
    startNum = filteredArray[startInd];
    filteredArray.splice(startInd, 1);
    missingNum = sum - startNum;
    if (binaryMatch(filteredArray, missingNum)) {
      sums.push([missingNum, startNum]);
      filteredArray = filteredArray.filter(el => el != missingNum);
    }
  }
  return sums;
}

function hashTwoSum(array, sum) {
  let sums = [];
  let hashTable = {};

  for (let i = 0; i < array.length; i++) {
    let sumMinusElement = sum - array[i];
    //check if this number exists in the hash table
    //if yes, we found a pair of numbers that add upto sum
    if (hashTable[sumMinusElement.toString()] !== undefined) {
      sums.push([sumMinusElement, array[i]])
    }
    // add the current number to the hash table
    hashTable[array[i].toString()] = array[i];
  }
  return sums;
}
