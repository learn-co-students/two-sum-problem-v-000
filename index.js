function bruteForceTwoSum(array, sum) {
  const sumPairs = [];
    for (let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){  
            if(array[i] + array[j] === sum) sumPairs.push([array[i], array[j]])
    } 
  }
  return sumPairs
}

function binarySearchTwoSum(array, sum){
  const sortedArr = array.sort();
  const sumPairs = [];
  for (let [i,e] of sortedArr.entries()){
    const searchNum = sum - el;
    if (binaryMatch(sortedArr.slice(i + 1), searchNum)) sumPairs.push([el, searchNum])
  }
  return sumPairs
}



function binaryMatch(array, missing){
  if(binarySearchTwoSum(array, missing)){
    return true
  }
}

function hashTwoSum(arr, sum){
  const searchSet = new Set()
  const sumPairs = [];
  for(let el of arr){
    if(searchSet.has(el)){
      sumPairs.push([num - el, el])
      searchSet.delete(el)
    } else {
      searchSet.add(num - el)
    }
  }
  return sumPairs
}

function binarySearchTwoSum(array, sum){
    const sortedArr = array.sort();
    const sumPairs = [];
    for(let [i, el] of sortedArr.entries()){
        const searchNum = sum - el;
        if(binaryMatch(sortedArr.slice(i + 1), searchNum)) sumPairs.push([el, searchNum])
    }
    return sumPairs
}

function binaryMatch(arr, num){
    if(arr.length === 0) return false
    const splitIndex = Math.floor(arr.length / 2)
    if(arr[splitIndex] < num){
        return binaryMatch(arr.slice(splitIndex + 1), num)
    }else if(arr[splitIndex] > num){
        return binaryMatch(arr.slice(0, splitIndex), num)
    }else{
        return true
    }
}

function hashTwoSum(arr, num){
    const searchSet = new Set()
    const sumPairs = [];
    for(let el of arr){
        if(searchSet.has(el)){
            sumPairs.push([num - el, el])
            searchSet.delete(el)
        }else{
            searchSet.add(num - el)
        }
    }
    return sumPairs
}