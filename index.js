


function bruteForceTwoSum(arr, sum) {
  let pairs = []

  // let indexCheckedFully = {}

  // arr.forEach( (num, index) => {

    // indexCheckedFully[index] = true

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairs.push([arr[i], arr[j]])
      }
    }
  }
  return pairs
}


    //   if (indexCheckedFully[i] === true) {
    //     continue
    //   }
    //   if (num + arr[i] === 6 ) {
    //     pairs.push([num, arr[i]])
    //   }
    //
    // }

//   })
//
//   return pairs
// }

// This works:
// function bruteForceTwoSum(arr, sum) {
//   let pairs = []
//
//   let indexCheckedFully = {}
//
//   arr.forEach( (num, index) => {
//
//     indexCheckedFully[index] = true
//
//     for (let i = 0; i < arr.length; i ++) {
//
//       if (indexCheckedFully[i] === true) {
//         continue
//       }
//       if (num + arr[i] === 6 ) {
//         pairs.push([num, arr[i]])
//       }
//
//     }
//
//   })
//
//   return pairs
// }

// This returns repeat pairs
// function bruteForceTwoSum(arr, sum) {
//   let pairs = []
//
//   arr.forEach( (num, index) => {
//
//     for (let i = 0; i < arr.length; i ++) {
//
//       if (index === i) {
//         continue
//       }
//       if (num + arr[i] === 6 ) {
//         pairs.push([num, arr[i]])
//       }
//
//     }
//
//   })
//
//   return pairs
// }

// This is missing one pair
// function bruteForceTwoSum(arr, sum) {
//
//   let pairs = []
//   let numbersMultipliedByAllOthers = { }
//
//   arr.forEach( (num, index) => {
//
//     numbersMultipliedByAllOthers[num] = true
//
//     for (let i = 0; i < arr.length; i ++) {
//
//       if (numbersMultipliedByAllOthers[arr[i]] === true) {
//         continue
//       }
//
//       if (num + arr[i] === 6 ) {
//         pairs.push([num, arr[i]])
//       }
//
//     }
//
//   })
//
//   return pairs
// }

function binarySearchTwoSum(arr, sum) {

  let pairs = []
  // let indexCheckedFully = {}


  arr.forEach( (num, index) => {

    // indexCheckedFully[index] = true

    let target = sum - num

    let floorIndex = -1
    let ceilingIndex = arr.length

    while (floorIndex + 1 < ceilingIndex) {

        let midpointIndex = floorIndex + ceilingIndex/2

        // if (!indexCheckedFully[midpointIndex]) {
        //   continue
        // }
        if (arr[midpointIndex] === target) {
          return pairs.push([num, arr[midpointIndex]])
        }
        else if (arr[midpointIndex] > target) {
          ceilingIndex = midpointIndex
        } else if (arr[midpointIndex] < target) {
          floorIndex = midpointIndex
        }

    }

  })
  return pairs
}

function binaryMatch(sortedArray, missingNum){
  return sortedArray.includes(missingNum) ? true : false
}


// function hashTwoSum(arr, sum) {
//
//   let pairs = []
//
//   let numberChecker = { }
//
//   arr.forEach( (num) => {
//     return numberChecker[num] = true
//   })
//
//   arr.forEach( num => {
//     const target = sum - num
//
//     if (numberChecker[target]) {
//       pairs.push([num, target])
//       // Indicate number can no longer be used to avoid duplicates
//       numberChecker[target] = false
//     }
//
//
//
//
//   })
//
//   return pairs
// }


function hashTwoSum(arr, target){
  let map = {}, results = [];
  for (let i=0; i<arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      results.push([map[arr[i]], arr[i]])
    } else {
      map[target - arr[i]] = arr[i];
    }
  }
  return results;
}
