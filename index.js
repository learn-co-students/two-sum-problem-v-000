// Merge Sort Function (Helper Function)

function findMinAndRemoveSorted(arr) {
  let min = arr[0];
  arr.splice(0,1);
  return min;
}

function merge(arr1, arr2) {
  let merged_arr = [];
  while (arr1.length != 0 && arr2.length != 0) {
    if (arr1[0] <= arr2[0]) {
      merged_arr.push(arr1[0]);
      arr1.splice(0,1);
    } else {
      merged_arr.push(arr2[0]);
      arr2.splice(0,1);
    }
  }
  if (arr1.length != 0) {
    merged_arr = merged_arr.concat(arr1);
  } else if (arr2.length != 0) {
    merged_arr = merged_arr.concat(arr2);
  }
  return merged_arr;
}

function mergeSort(array){
   let midpoint = Math.floor(array.length/2);
   let firstHalf = array.slice(0, midpoint);
   let secondHalf = array.slice(midpoint, array.length);
   //console.log(firstHalf,secondHalf);
   if(array.length < 2){
     return array;
   } else {
     //console.log(firstHalf,secondHalf);
     return merge(mergeSort(firstHalf), mergeSort(secondHalf));
   }
 }

//

/*
Problem: Given an array of numbers, return every pair of numbers that can be added up to a given target
Brute force approach: combine every two pairs (n^2 time)
Improved approach: use a hash to look up if the array includes sum-arr[i]

Assumptions:
1. numbers can be positive or negative
2. numbers can be repeated (have to check edge case if num = sum/2)
*/
function bruteForceTwoSum(arr,sum) {
  let results = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        results.push([arr[i],arr[j]]);
      }
    }
  }
  return results;
}

let results = [];

function binarySearchTwoSum(array, sum) {
  let sorted_array = mergeSort(array);
  let results = [];
  let new_array = [];
  for (var i = 0; i < sorted_array.length; i++) {
    let new_array = sorted_array.slice(0,i);
    new_array = new_array.concat(sorted_array.slice(i+1,sorted_array.length));
    if (binaryMatch(new_array, sum-sorted_array[i])){
      results.push([sorted_array[i],sum-sorted_array[i]]);
      sorted_array.splice(i,1);
    }
    //console.log(results);
  }
  return results;
}

//console.log(binarySearchTwoSum([2,3,4,3,6,7],6));

function binaryMatch(sorted_array, num) {
  let midpoint = Math.floor(sorted_array.length/2);
  if (sorted_array.length == 1) {
    if (sorted_array[0] == num) {
      return true;
    }
  } else if (num == sorted_array[midpoint]) {
    return true;
  } else if (num > sorted_array[midpoint]) {
    return binaryMatch(sorted_array.slice(midpoint),num);
  } else if (num < sorted_array[midpoint]) {
    return binaryMatch(sorted_array.slice(0,midpoint),num);
  }
  return false;
}

//console.log(binaryMatch([2,3,4,6,7],3));

function hashTwoSum(arr,sum) {
  let arr_hash = {};
  let results = [];

  // populate array into hash table for easy lookup
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in arr_hash) {
      arr_hash[arr[i]] += 1;
    } else {
      arr_hash[arr[i]] = 1;
    }
  }
  //console.log(arr_hash);

  // find two sum pairs
  for (var i = 0; i < arr.length; i++) {
    // edge case if num = sum/2
    if (arr[i] * 2 == sum) {
      if (arr_hash[String(arr[i])] > 1) { // array must include at least 2 occurences of num
        results.push([arr[i],arr[i]]);
        arr_hash[String(arr[i])] -= 2;
      }

    // general case
  } else if (arr[i] != sum && String(sum-arr[i]) in arr_hash) {
      if (arr_hash[String(arr[i])] > 0) {
        results.push([arr[i],sum-arr[i]]);
        arr_hash[String(arr[i])] -= 1;
        arr_hash[String(sum-arr[i])] -= 1;
      }
    }
  }
  return results;
}

//console.log(hashTwoSum([2,3,4,3,6,7],6));
