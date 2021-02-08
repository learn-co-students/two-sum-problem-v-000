function bruteForceTwoSum(array, sum) {
  const twoSums = [];
  
  for (let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      const n = array[i];
      const n2 = array[j];
      if (n + n2 === sum) {
        twoSums.push([n, n2]);
      }
    }
  }
  
  return twoSums;
}

function binarySearchTwoSum(array, sum) {
  const twoSums = [];
  const sorted = array.sort();
  
  for (let i = 0; i < sorted.length - 1; i++) {
    const n = sorted[i];
    const n2 = sum - n;
    if (binaryMatch(sorted.slice(i + 1), n2)) {
      twoSums.push([n, n2]);
    }
  }
  return twoSums;
}

function binaryMatch(array, missingNum) {
  while(array.length > 0) {
    const midPoint = Math.floor(array.length / 2);
    const n = array[midPoint];
    if (n === missingNum) {
      return true;
    }
    if (n > missingNum) {
      return binaryMatch(array.slice(0, midPoint - 1), missingNum);
    } else {
      return binaryMatch(array.slice(midPoint), missingNum);
    }
  }
  return undefined;
}

function hashTwoSum(array, sum) {
  const hash = {};
  const twoSums = [];
  
  array.forEach(n => {
    const n2 = sum - n;
    if (!hash[n]) {
      hash[n] = 1;
    } else {
      hash[n]++;
    }
  })
  
  array.forEach(n => {
    const n2 = sum - n;
    if(hash[n] && hash[n2]) {
      if (n !== n2 || hash[n] >= 2) {
        twoSums.push([n, n2]);
        hash[n]--;
        hash[n2]--;
      }
    }
  })
  
  return twoSums;
}