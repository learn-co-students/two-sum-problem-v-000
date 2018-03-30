function bruteForceTwoSum(array, sum) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        result.push([array[i], array[j]])
      }
    }
  }
  return result
}

function binarySearchTwoSum(array, sum) {
  let sortedArray = array.sort()
  let result = []
  let left = 0
  let right = array.length - 1
  while (left < right) {
    if (sortedArray[left] + sortedArray[right] == sum) {
      result.push([sortedArray[left], sortedArray[right]])
      left += 1
      right -= 1
    } else if (sortedArray[left] + sortedArray[right] > sum) {
      right -= 1
    } else {
      left += 1
    }
  }
  return result
}

function binaryMatch(sortedArray, missingNum) {
  let low = 0
  let high = sortedArray.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (sortedArray[mid] === missingNum) {
      return true
    } else if (sortedArray[mid] < missingNum) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return false
}

function hashTwoSum(array, sum) {
  let hashMap = {}
  let results = []
  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push([hashMap[array[i]], array[i]])
    } else {
      hashMap[sum - array[i]] = array[i]
    }
  }
  return results
}
