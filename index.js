function bruteForceTwoSum(arr, sum){

    let sums = [];
    // check each element in array
    for (let i = 0; i < arr.length; i++) {
    
        // check each other element in the array
        for (let j = i + 1; j < arr.length; j++) {

            // determine if these two elements sum to S
            if (arr[i] + arr[j] === sum) {
                sums.push([arr[i], arr[j]]);
            }
    }
}
return sums;
}
 

function hashTwoSum(arr, sum){
    let sums = [];
    let hashTable = {};
  
    // check each element in array
    for (let i = 0; i < arr.length; i++) {
   
      // calculate sum - current element
      let diff = sum - arr[i];
  
      // check if this number exists in hash table
      // if so then we found a pair of numbers that add up to sum
      // convert to string because keys are strings
      if (hashTable[diff.toString()] !== undefined) { 
        sums.push([diff, arr[i]]);
      }
  
      // add the current number to the hash table
      hashTable[arr[i].toString()] = arr[i];
  
    }
  
    // return all pairs of integers that add to sum
    return sums;
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