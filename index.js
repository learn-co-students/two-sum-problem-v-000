function bruteForceTwoSum(a,sum){
  let results = []
  let array = a.slice(0)
  a.forEach(num => {
    array.shift()
    for(var i = 0; i < array.length-1; i++){
      if(num + array[i] === sum){
        results.push([num, array[i]])
      }
    }
  })
  return results
}

function binarySearchTwoSum(array, sum){
  let results = []
  let sorted = array.slice(0).sort()
  let shifted = sorted.slice(0)

  sorted.forEach(num => {
    shifted.shift()
    if(binaryMatch(shifted, sum-num)){
      results.push([num, sum-num])
    }
  })
  return results
}

function binaryMatch(sortedArray, missingNum){
  if(sortedArray.length > 1){
    let mid = Math.floor(sortedArray.length/2)
    if(sortedArray[mid] === missingNum){return true}
    if(sortedArray[mid] > missingNum){
      return binaryMatch(sortedArray.slice(0, mid), missingNum)
    }else{
      return binaryMatch(sortedArray.slice(mid+1), missingNum)
    }
  }else{
    return sortedArray[0] === missingNum
  }
}

function hashTwoSum(array,sum){
  let results = []
  const hash = makeHash(array)
  array.forEach(num => {
    if(hash[sum-num]){
      results.push([num, sum-num])
      hash[num] = false
    }
  })
  return results

}

function makeHash(array){
  let obj  = {};
  array.forEach(num => {
    if (obj[`${num}`]){
      obj[`${num}`] = [obj[`${num}`], num]
    }
    obj[`${num}`] = num;
  })
  return obj
}
