function bruteForceTwoSum(arr, sum){
  let pairs = []
  for (let el of arr){
    let curr = arr.shift()
    for (let other of arr){
      if ((curr + other) === sum){
        let pair = [curr, other]
        pairs.push(pair)
      }
    }
  }
  return pairs
}

function merge(a1,a2){
  let result = []
  while (a1[0] && a2[0]){
    if (a1[0] < a2[0]){
      result.push(a1.shift())
    }
    else{
      result.push(a2.shift())
    }
  }
  return result.concat(a1).concat(a2)
}
function mergeSort(a){
  let mid = parseInt(a.length/2)
  let a1 = a.slice(0,mid)
  let a2 = a.slice(mid,a.length)

  if (a.length < 2){
    return a
  }
  else{
    return merge(mergeSort(a1), mergeSort(a2))
  }
}

function binarySearchTwoSum(arr, sum){
  let pairs = []
  let sortedArr = mergeSort(arr)
  while (sortedArr.length){
    let el = sortedArr.pop()
    let missNum = sum - el
    if (binaryMatch(sortedArr, missNum)){
      let pair = [missNum, el]
      pairs.push(pair)
    }
  }
  return pairs
}

function binaryMatch(sortedArr, missNum){
  let guesspt = parseInt(sortedArr.length/2)
  let startpt = 0
  let endpt = sortedArr.length - 1
  while (startpt !== endpt){
    if (missNum < sortedArr[guesspt]){
      endpt = guesspt
      guesspt = parseInt((endpt - startpt)/2)
    }
    else if (missNum > sortedArr[guesspt]){
      startpt = guesspt
      guesspt = parseInt((endpt + startpt)/2)
    }
    else if (missNum === sortedArr[guesspt]) {
      return true
    }
    else {
      return false
    }
  }
}

function hashTwoSum(arr, sum){
  let hash = {}
  let pairs = []
  let pair
  for (let el of arr){
    // console.log(el)
    if (!hash[el]){
      hash[el] = el
    }
    else{
      hash[el]+= el
    }
  }
  // console.log(hash)
  for (let el of arr){
    let other = sum - el
    if (hash[other]){
      if (hash[other] > other){
        hash[other]-=other
      }
      else{
        delete hash[other]
      }
      delete hash[el]
      pair = [el, other]
      pairs.push(pair)
    }
  }
  return pairs
}
