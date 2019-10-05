function bruteForceTwoSum(arr, sum) {
  const pairs = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) pairs.push([arr[i], arr[j]])
    }
  }
  return pairs
}

function binaryMatch(sortedArr, num) {
  const iMid = Math.floor(sortedArr.length / 2)
  const mid = sortedArr[iMid]

  if (mid > num) {
    const newArr = sortedArr.slice(0, iMid)
    return binaryMatch(newArr, num)
  } else if (mid < num) {
    const newArr = sortedArr.slice(iMid + 1, sortedArr.length)
    return binaryMatch(newArr, num)
  } else {
    return mid === num
  }
}

function binarySearchTwoSum(arr, sum) {
  arr.sort()
  const pairs = []

  arr.forEach((num, i) => {
    if (binaryMatch(arr.slice(i + 1), sum - num)) {
      pairs.push([num, sum - num])
    }
  })
  return pairs
}

function hashTwoSum (arr, sum) {
  const seen = {}
  const pairs = []

  arr.forEach(num => {
    if (seen[sum - num]) pairs.push([sum - num, num])
    seen[num] = true
  })
  return pairs
}
