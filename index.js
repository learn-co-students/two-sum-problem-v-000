function bruteForceTwoSum(array, sum){
    let matchingPairs = []
    let num1

    while (array.length > 0){
        // pop() would be faster but test is hard-coded to expect shift() :(
        num1 = array.shift()
        for (let num2 of array){
            if (num1 + num2 === sum){
                matchingPairs.push([num1, num2])
            }
        }
    }

    return matchingPairs
}

function binarySearchTwoSum(array, sum){
  array = mergeSort(array)
  let matchingPairs = []
  let num1, wouldBeNum2

  while (array.length > 0){
    num1 = array.shift()
    wouldBeNum2 = sum - num1

    if (binaryMatch(array, wouldBeNum2)){
      matchingPairs.push([num1, wouldBeNum2])
    }
  }

  return matchingPairs
}

// SUPPORT FUNCTIONS
function mergeSort(array){
  if (1 === array.length) {
    return array
  }
  else {
    let midpoint = array.length / 2
    let leftHalf = array.slice(0, midpoint)
    let rightHalf = array.slice(midpoint, array.length)

    return merge(mergeSort(leftHalf), mergeSort(rightHalf))
  }
}

function binaryMatch(array, target){
  // find the midpoint
  let midpointIndex = Math.floor(array.length / 2)
  let midpointValue = array[midpointIndex]

  console.log("array: " + array)
  console.log("midpoint: " + midpointIndex)
  console.log("midpointValue: " + midpointValue)

  // check to see if we have scored a direct hit!
  if (midpointValue === target){
    return true;
  }

  // otherwise, search the left or right half depending on whether the target is smaller or bigger than the midpoint value
  else {
    let lowIndex, highIndex

    if (midpointValue > target)
      // Array#slice() already excludes the element at the highIndex index, so we don't need to subtract 1 from the midpointIndex
      { lowIndex = 0; highIndex = midpointIndex}
    else if (midpointValue < target)
      { lowIndex = midpointIndex + 1; highIndex = array.length }

    if (lowIndex === highIndex)
      { return false }
    else
      { return binaryMatch(array.slice(lowIndex, highIndex), target) }
  }
}


// SUPPORT FUNCTIONS LEVEL 2
function merge(array1, array2){
  let mergedArray = []

  // this allows us to pop the smallest element on every merge lap
  // this is significantly (?) cheaper than shifting on every lap
  // HOWEVER, this increases complexity.
  // So before preferring this implementation, test to make sure the performance gain is actually significant
  //let array1Desc = ascToDesc(array1)
  //let array2Desc = ascToDesc(array2)

  // in the meantime, use the possibly less efficient but simpler & shorter solution
  while (0 !== array1.length && 0 !== array2.length){
    array1[0] < array2[0] ?
      mergedArray.push(array1.shift()) :
      mergedArray.push(array2.shift())
  }

  // Is the suspected performance gain & real significant enough to justify the increased complexity & larger code base?
  //mergedArray.concat(descToAsc(array1Desc)).concat(descToAsc(array2Desc))

  return mergedArray.concat(array1).concat(array2)
}
