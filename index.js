function bruteForceTwoSum(array, sum) {
  let matches = []
  for(let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === sum) {
        matches.push([array[i], array[j]])
      }
    }
  }
  return matches
}

function binarySearchTwoSum(array, sum) {
  let matches = []
  let sortedArray = array.sort()

  for (let i = 0; i < array.length; i++) {
    let missingNum = sum - sortedArray[i]
    let flatMatch = [].concat.apply([], matches)
    if (binaryMatch(sortedArray, missingNum) && !flatMatch.includes(missingNum)){
      matches.push([sortedArray[i], missingNum])
    }
  }
  return matches
}

function binaryMatch(sortedArray, missingNum) {
  let min = 0
  let max = sortedArray.length - 1
  let currentIndex
  let currentElement

  while (min <= max) {
    currentIndex = (min + max) / 2 | 0;
    currentElement = sortedArray[currentIndex];

    if (currentElement < missingNum) {
      min = currentIndex + 1;
    } else if (currentElement > missingNum) {
      max = currentIndex - 1;
    } else {
      return true;
    }
  }
  return false;

}

function hashTwoSum(array, sum) {
  let matches = []
  let hash = {}
  array.forEach(key => {
    hash[key] = (sum - key)
  })
  array.forEach(key => {
    let flatMatch = [].concat.apply([], matches)
    if (array.includes(hash[key]) && !flatMatch.includes(key)) {
      matches.push([key, hash[key]])
    }
  }
  )
  return matches
}
