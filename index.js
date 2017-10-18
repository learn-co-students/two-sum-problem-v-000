function bruteForceTwoSum(array, sum) {
  let newArr = []
  for (let i=0; i<array.length-1; i++) {
    for (let j=i+1; j<array.length; j++) {
      if(array[i]+array[j] === sum) {
        newArr.push([array[i], array[j]])
      }
    }
  }
  return newArr;
}

function binaryMatch(sortedArray, searchElement) {
      var minIndex = 0;
      var maxIndex = sortedArray.length - 1;
      var currentIndex;
      var currentElement;
      while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        // console.log(currentIndex);
        currentElement = sortedArray[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return true;
        }
    }
    return false;
}

function binarySearchTwoSum(array, sum) {
  array.sort()
  var newArray = [];
  var duplicate;
  for (let i=0; i<array.length; i++) {
    if (binaryMatch(array, sum - array[i]) && array[i] <= sum -array[i] && !duplicate) {
      if (array[i] === sum - array[i]) {
        duplicate = true;
      }
      newArray.push([array[i], sum - array[i]]);
    }
  }
  return newArray;
}

function hashTwoSum(array, sum) {
  var newArray =[];
  var obj = {};
  var duplicate;
  array.forEach(num => obj[num] = true);
  array.forEach(num => {
    if(obj[sum-num] && num <= sum - num && !duplicate) {
      if (num === sum - num) {
        duplicate = true;
      }
      newArray.push([num, sum-num]);
    }
  })
  return newArray;
}
