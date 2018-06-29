function bruteForceTwoSum(array, sum) {
  let solution = [];
  for (let k=0; k < array.length; k++) {
    for (let i=0; i < array.length; i++) {
      if (array[k] + array[i] === sum) {
        solution.push([array[k], array[i]])
        array.splice(k, 1)
        array.splice(i - 1, 1)
      }
    }
  }
  return solution;
}

function binarySearchTwoSum(array, sum) {
  let sortedArray = mergeSort(array)
  let solution = [];
  sortedArray.forEach(number => {
    if (binaryMatch(sortedArray, 6 - number)) {
      sortedArray.shift()
      solution.push([number, 6 - number])
    }
  })
  return solution
}

function mergeSort (arr) {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

function binaryMatch(array, number) {
  let startingPoint = 0;
  let endingPoint = parseInt(array.length /2);
  if (array[endingPoint] === number) {
    return true
    } else if (startingPoint === endingPoint) {
      return false
    } else {
      let firstHalf = array.slice(0, endingPoint);
      let secondHalf = array.slice(endingPoint, array.length)
      if (array[endingPoint] > number) {
        return binaryMatch(firstHalf, number)
      } else {
        return binaryMatch(secondHalf, number)
      }

    }
}

function hashTwoSum(array, sum) {
  let hash = {};
  let solution = [];
  array.forEach(number => {
    hash[number] = number
  })
  array.forEach(number => {
    if(hash[6 - number]) {
      hash[number] = null
      solution.push([number, 6 - number])
    }
  })
  return solution
}
