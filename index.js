function bruteForceTwoSum(array, sum) {
  let sums = [];
  array.forEach((n1, i) => {
    let j = i + 1;
    let n2;
    while (j < array.length) {
      n2 = array[j];
      (n1 + n2) == sum ? sums.push([n1, n2]): null
      ++j;
    }
  })
  return sums;
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

function binaryMatch(sortedArray, missingNum) {
  if (sortedArray.length == 0 ) {
    return false;
  } else if (sortedArray.length == 1) {
    if (sortedArray[0] == missingNum) {
      return true;
    } else if (sortedArray[0] != missingNum) {
      return false;
    }
  } else if (sortedArray.length > 1) {
    let startInd = Math.floor(sortedArray.length/2);
    let startNum = sortedArray[startInd];
    let newArr;
    if (startNum == missingNum) {
      return true;
    } else if (startNum < missingNum) {
      //check the numbers to right
      newArr = sortedArray.slice(startInd+1);
      return binaryMatch(newArr, missingNum)
    } else if (startNum > missingNum) {
      //check nums to left
      newArr = sortedArray.slice(0,startInd)
      return binaryMatch(newArr, missingNum)
    }
  }
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
