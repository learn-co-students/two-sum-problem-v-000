function bruteForceTwoSum(array, sum) {
  let output = []
  for (let i=0; i < array.length; i++) {
    for (let j = i + 1; j < array.length - 1 ; j++) {
      if (i !== j) {
        if (array[i] + array[j] === sum) {
          output.push([array[i], array[j]])
        }
      }
    }
  }
  return output
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  let mid = Math.floor(array.length/2)
  let subLeft = mergeSort(array.slice(0,mid))
  let subRight = mergeSort(array.slice(mid))

  return merge(subLeft, subRight)
}

function merge(node1, node2) {
  let output = []
  while (node1.length > 0 && node2.length >0) {
    output.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
  }
  return output.concat(node1.length ? node1 : node2)
}

function binarySearchTwoSum(array, sum) {
  let sortedArray = mergeSort(array)
  if (sortedArray == null || sortedArray.length ===0) {
    return false
  }

  let output = []
  let i = 0
  let j = sortedArray.length - 1

  while (i < j) {
    let value = sortedArray[i] + sortedArray[j]
    if (value < sum) {
      i++
    } else if (value > sum) {
      j--
    } else {
      output.push([sortedArray[i], sortedArray[j]])
      i++
    }
  }
  return output
}

function binaryMatch(sortedArray, missingNum) {
  let output = []
  output = binarySearchTwoSum(sortedArray, missingNum)
  if (output) {
    return true
  } else {
    return false
  }
}

function hashTwoSum(array, sum) {
  let hash = {}
  let output = []
  //let excluded = []
  let excluded = {}
  for (let i in array) {
    if (!hash[array[i]]) {
      hash[array[i]] = []
    }
    hash[array[i]].push(i)
  }
  for (let j in array) {
    if (hash[sum - array[j]] && !excluded[array[j]]) {
      if (array[j] === sum - array[j]) {
        if (hash[array[j]].length >= 2) {
          output.push([array[j], sum - array[j]])
        }
      } else {
        output.push([array[j], sum - array[j]])
      }
      excluded[sum - array[j]] = true
    }
  }
  return output
}
