function bruteForceTwoSum(a, sum) {
  let answer = []
  for (let i=0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === sum) {
      answer.push([a[i],a[j]])
      }
    }
  }
  return answer
}

function binarySearchTwoSum(a, sum) {
  let sortedArray = a.sort();
  let answer = [];

  for (let i = 0; i < sortedArray.length; i++) {
    let num = sum - sortedArray[i];
    let match = binaryMatch(sortedArray, num);

    if (match) {
      answer.push([sortedArray[i], num])
    }
  }
return answer.splice(0, answer.length/2)

}

function binaryMatch(sortedArray, num) {
  let min = 0;
  let max = sortedArray.length -1;

  while (min <= max) {
    let guess = Math.floor((min + max) / 2);

    if (sortedArray[guess] === num) {
      return true
    } else {
      if (sortedArray[guess] < num) {
        min = guess + 1
      } else {
        max = guess - 1
      }
    }
  }
return false
}

function hashTwoSum(a, sum) {
  let hash = {};
  let answer = [];
  a.forEach(number => {
    hash[number] = number
  })
  a.forEach(number => {
    if(hash[sum - number]) {
      hash[number] = null
      answer.push([number, sum - number])
    }
  })
  return answer

}
