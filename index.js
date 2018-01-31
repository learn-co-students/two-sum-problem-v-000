function bruteForceTwoSum(arr, target) {
  let res = []
  for (const elementA of arr) {
    for (const elementB of arr) {
      if (elementA + elementB === target) {
        res.push([elementA, elementB])
        let indexA = arr.indexOf(elementA)
        arr.splice(indexA, 1)
        let indexB = arr.indexOf(elementB)
        arr.splice(indexB, 1)
      }
    }
  }
  return res
}

function binarySearch(arr, i) {
  var mid = Math.floor(arr.length / 2);
  if (arr[mid] === i) {
    return true;
  } else if (arr[mid] < i && arr.length > 1) {
    return binarySearch(arr.slice(mid), i);
  } else if (arr[mid] > i && arr.length > 1) {
    return binarySearch(arr.slice(0, mid), i);
  } else {
    return false;
  }
}

function binarySearchTwoSum(unsortedArr, target) {
  let mySortedArr = mergeSort(unsortedArr)
  let res = []
  for (const element of mySortedArr) {
    let sum = target - element
    if (binarySearch(mySortedArr, sum) ){
      res.push([element, sum])
      let index = mySortedArr.indexOf(element)
      mySortedArr.splice(index, 1)
      index = mySortedArr.indexOf(sum)
      mySortedArr.splice(index, 1)
    }
  }
  return res
}

function binaryMatch(unsortedArr, target){
  let results = binarySearchTwoSum(unsortedArr, target)
  return results.length > 0? true : false
}


function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(left, right) {
  let res = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      res.push(findMinAndRemoveSorted(left));
    } else {
      res.push(findMinAndRemoveSorted(right));
    }
  }
  return res.concat(left.concat(right));
}

function mergeSort(myNumbers) {
  let midpoint = Math.floor(myNumbers.length / 2)
  let left = myNumbers.slice(0, midpoint)
  let right = myNumbers.slice(midpoint)

  if (myNumbers.length < 2) {
    //base case ahoy cap
    return myNumbers
  }
  else {
    return merge(mergeSort(left), mergeSort(right))
  }
}

function hashTwoSum(unsortedArr, target){
  let hashMap = {}
  let results = []
  for (const element of unsortedArr) {
    hashMap[element] = element
  }
  for (const hashKey of Object.keys(hashMap)) {
    let value = hashMap[hashKey]
    let sum = target - value
    debugger
    if(hashMap[sum]){
      results.push([value, sum])
      delete hashMap[value]
      delete hashMap[sum]
    }
  }
  return results
}
