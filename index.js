function bruteForceTwoSum(array, sum) {
  var out = [];
  for(let i=0; i < array.length; i++){
    for(let j=i+1; j < array.length; j++){
      if(array[i]+array[j] === sum){
        out.push([array[i],array[j]])
      }
    }
  }
  return out;
}

function binarySearchTwoSum(array, sum){
  let out = [];
  let sorted = array.sort((a,b) => a>b);
  for(let i = 0; i < sorted.length; i++){
    if(binaryMatch(sorted.slice(i+1, sorted.length), sum-sorted[i])){
      out.push([sorted[i],sum-sorted[i]])
    }
  }
  return out;
}

function binaryMatch(array, target){
  let index = Math.floor(array.length / 2);
  if (array.length === 0) return false;
  if(array.length === 1){
    return array[0] === target;
  }
  if(array[index] === target){
    return true;
  }
  else if (array[index] > target) {
    return binaryMatch(array.slice(0,index), target);
  }
  else {
    return binaryMatch(array.slice(index+1, array.length), target);
  }
}

function hashTwoSum(array, sum){
  let out = [];
  let sorted = array.sort((a,b) => a>b);
  let exists = {};
  for(let i = 0; i < sorted.length; i++){
    exists[sorted[i]] = 1;
  }
  for(let i = 0; i < sorted.length; i++){
    if(exists[sum-sorted[i]] === 1){
      out.push([sorted[i], sum-sorted[i]]);
      exists[sum-sorted[i]] = 0
      exists[sorted[i]] = 0
    }
  }
  return out;
}
