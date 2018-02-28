function bruteForceTwoSum(arr, sum) {
  let pairs = []
  arr.map(function(element) {
    arr = arr.slice(arr.lastIndexOf(element))
    for (let i=0; i < arr.length; i++) {
      if (arr[i] + element == sum) {
        pairs.push([element, arr[i]])
      }
    }
  })
  return pairs
}

function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length != 0 && secondHalf.length != 0){
      if (firstHalf[0] < secondHalf[0]) {
        sorted.push(findMinAndRemoveSorted(firstHalf))
      } else {
        sorted.push(findMinAndRemoveSorted(secondHalf))
      }
    }
    return sorted.concat(firstHalf).concat(secondHalf)
  }

  function mergeSort(array){
      let midpoint = array.length/2
      let firstHalf = array.slice(0, midpoint)
      let secondHalf = array.slice(midpoint, array.length)
      let sorted;

      if (array.length < 2){
        return array
      } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
      }
      return sorted
    }

  function binaryMatch(arr, num) {
    arr = mergeSort(arr)
    if (arr.includes(num)) {
      return true
    }
  }

  function binarySearchTwoSum(arr, sum) {
    let pairs = []
    arr = mergeSort(arr)
    for (let i = 0; i < arr.length; i++) {
      let num = sum - arr[i]
      if (binaryMatch(arr, num)) {
        pairs.push([arr[i], num])
      }
    }
    return pairs.slice(0, pairs.length/2)
  }

  function hashTwoSum(arr, sum) {
    let pairs = [];
    for (let i=0; i < arr.length; i++) {
      let adder = arr[i]
      let secondAdder = sum - arr[i]
      let num = {adder: secondAdder}
      if (arr.includes(num["adder"])) {
        pairs.push([adder, num["adder"]])
      }
    }
    return pairs.slice(0, pairs.length/2)
  }
