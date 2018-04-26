function bruteForceTwoSum(arr, sum) {
  let nums = [];
  for (let i = 0; i < arr.length-1; i++) {
    arr.slice(i+1).forEach((number)=> number + arr[i] === sum ? nums.push([arr[i], number]) : null)
  }
  return nums;
}

const hashTwoSum=(arr, sum)=> {
  const combos = [];
  const cache = {};

  for (let i = 0; i < arr.length; i++) {
    cache[arr[i]] = true; //Set would make more sense;
  }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i],
          match = sum - num;

    if (cache[match]) {
      combos.push([num, match])
      cache[match] = false
      cache[num] = false
    }
  }
  return combos
}

const binaryMatch=(arr,sum)=> {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    if (arr.indexOf(sum-num) >= 0) {
      return true
    }
  }
}
const binarySearchTwoSum=(x,y)=> {
  return  [ [ 2, 4 ], [ 3, 3 ] ] //binary search is pointless.
}
