
// This returns repeat pairs
function bruteForceTwoSum(arr, sum) {
  let pairs = []

  arr.forEach( (num, index) => {

    for (let i = 0; i < arr.length; i ++) {

      if (index === i) {
        continue
      }
      if (num + arr[i] === 6 ) {
        pairs.push([num, arr[i]])
      }

    }

  })

  return pairs
}

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

  arr.forEach( (num, index) => {

    let target = sum - num

    let floorIndex = -1
    let ceilingIndex = arr.length

    while (floorIndex + 1 < ceilingIndex) {

        midpointIndex = floorIndex + ceilingIndex/2

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


function hashTwoSum(arr, sum) {


}
