
function bruteForceTwoSum(a, sum) {
  var answer = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] == sum) {
        answer.push([a[i], a[j]]);
      }
    }
  }
  return answer;
}

function binaryMatch(array, value) {
  if (array.length == 1) {
    return (array[0] == value)
  }
  let mid = array[Math.floor(array.length / 2)]
  let left = array.slice(0, array.length / 2)
  let right = array.slice(array.length / 2, array.length)

  if (mid > value) {
    return binaryMatch(left, value)
  } else if (mid < value) {
    return binaryMatch(right, value)
  } else if (mid == value) {
    return true
  }
}




function binarySearchTwoSum(array, sum) {
  let result = []
  let sorted = array.sort();
  for (let i = 0; i < sorted.length; i++) {
    let difference = sum - sorted[i];
    let arrayToSearch = sorted.slice(i + 1, sorted.length)
    if (binaryMatch(arrayToSearch, difference)) {
      result.push([sorted[i], difference])
    }
  }
  return result
}
