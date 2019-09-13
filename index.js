// assumptions:
// array collections can be empty
// each array value is numeric and can be zero, positive or negative whole number
// sum value can be zero, positive or negative whol number
// once the two numbers are found that add up to the provided sum, these numbers are not referenced again
// function returns array collectection:
// - of one or more arrays of two numbers that add up to the provided sum
// - empty array if there's zero matching criteria
function bruteForceTwoSum(array, sum) {
  let pairedSum = [];
  let sortedArray = array.slice();

  if (sortedArray.length > 1) {
    sortedArray.sort((a, b) => a - b);
    for (let index = 0; index < sortedArray.length; index++) {
      for (
        let subIndex = index + 1;
        subIndex < sortedArray.length;
        subIndex++
      ) {
        if (sortedArray[index] + sortedArray[subIndex] === sum) {
          pairedSum.push([sortedArray[index], sortedArray[subIndex]]);
          sortedArray.splice(subIndex, 1);
          break;
        }
      }
    }
  }
  return pairedSum;
}

function binarySearchTwoSum(array, sum) {
  let pairedSum = [];
  if (array.length > 1) {
    let index = 0;
    let sortedArray = [...array];
    sortedArray.sort((a, b) => a - b);

    while (index < sortedArray.length && sortedArray[index] < sum) {
      const missingNum = sum - sortedArray[index];
      if (binaryMatch(sortedArray.slice(index + 1), missingNum)) {
        pairedSum.push([sortedArray[index], missingNum]);
      }
      index++;
    }
  }
  return pairedSum;
}

function binaryMatch(array, num) {
  let startPoint = 0;
  let endPoint = parseInt(array.length / 2);

  if (array[endPoint] === num) {
    return true;
  } else if (startPoint === endPoint) {
    return false;
  } else {
    let firstHalf = array.slice(0, endPoint);
    let secondHalf = array.slice(endPoint, array.length);
    if (array[endPoint] > num) {
      return binaryMatch(firstHalf, num);
    } else {
      return binaryMatch(secondHalf, num);
    }
  }
}
// function binaryMatch(array, num) {
//   let startpoint = 0;
//   let endpoint = array.length - 1;
//   let guessPosition = parseInt((endpoint - startpoint) / 2);
//   while (startpoint != endpoint) {
//     console.log(
//       `start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`
//     );
//     if (array[guessPosition] < num) {
//       console.log('too low');
//       startpoint = guessPosition;
//       guessPosition = startpoint + Math.round((endpoint - startpoint) / 2);
//     } else if (array[guessPosition] > num) {
//       console.log('too high');
//       endpoint = guessPosition;
//       guessPosition = startpoint + parseInt((endpoint - startpoint) / 2);
//     } else {
//       console.log('just right');
//       array.splice(guessPosition, 1);
//       console.log(array);
//       return true;
//     }
//   }
//   if (array === num) {
//     console.log('why?', array);
//     return true;
//   } else {
//     console.log('sorry');
//     return false;
//   }
// }

function hashTwoSum(array, sum) {
  let hash = {};
  let pairedSum = [];

  array.forEach(number => {
    hash[number] = number;
  });
  array.forEach(number => {
    if (hash[sum - number]) {
      hash[number] = null;
      pairedSum.push([number, sum - number]);
    }
  });
  return pairedSum;
}
