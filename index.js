function bruteForceTwoSum(arr, sum) {
  const output = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum && i <= j) {
        output.push([arr[i], arr[j]]);
      }
    }
  }
  return output.filter((pair, index) => output.indexOf(pair) === index);
}

function binarySearchTwoSum(arr, sum) {
  arr = arr.sort();
  const output = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i];
    const complement = sum - num;
    if (binaryMatch(arr.slice(i + 1), complement)) output.push([num, complement]);
  }
  return output;
}

function binaryMatch(arr, num) {
  let midIdx = Math.floor(arr.length / 2);
  while ((arr[midIdx] !== num && arr.length > 1)) {
    if (arr[midIdx] > num) {
      arr = arr.slice(0, midIdx);
      midIdx = Math.floor(arr.length / 2);
    } else {
      arr = arr.slice(midIdx + 1);
      midIdx = Math.floor(arr.length / 2);
    }
  }
  return arr[midIdx] === num;
}

function hashTwoSum(arr, sum) {
  arr = arr.sort();
  const output = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i];
    const complement = sum - num;
    if (binaryMatch(arr.slice(i + 1), complement)) output.push([num, complement]);
  }
  return output;
}
