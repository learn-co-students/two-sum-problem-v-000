function bruteForceTwoSum(arr, sum) {
  let pairs = [];

    arr.map(function(element) {
      arr = arr.slice(arr.lastIndexOf(element))
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] + element == sum) {
          pairs.push([element, arr[i]]);
        }
      }
    })
    return pairs
}

function binarySearchTwoSum() {

}

function binaryMatch() {

}

function hashTwoSum() {

}
