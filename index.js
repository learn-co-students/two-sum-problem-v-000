function bruteForceTwoSum ( array, sum ){
	let answer = [];

	for ( let i = 0; i < array.length; i++ ){
		for ( let j = i+1; j < array.length; j++ ){
			if( array[i] + array[j] === sum ){
				answer.push([array[i], array[j]]);
			};
		};
	};

	return answer;
};

function binarySearchTwoSum ( sortedArray, sum ){
	let answer = [],
		indices = {},
		binIndex

	for (let i=0; i<sortedArray.length; i++){
		let diff = sum - sortedArray[i];

		binIndex = binarySearch( sortedArray, diff )

	    if (binIndex && !indices[i] && !indices[binIndex]){
	      answer.push([sortedArray[i],sortedArray[binIndex]])
	      indices[i] = true
	      indices[binIndex] = true
    }
  }
  return answer
}


let binarySearch = (sortedArray, num) => {
  let start = 0,
      end = sortedArray.length - 1,
      mid
while (start <= end){
    mid = Math.floor((start + end)/2)
    if (num === sortedArray[mid]){
      return mid
    }else if (num < sortedArray[mid]){
      end = mid - 1
    }else if (num > sortedArray[mid]){
      start = mid + 1 
    }
  }
  return false
}

function binaryMatch( sortedArray, num ){
	let start = 0,
		end = sortedArray.length -1,
		mid

	while (start <= end){
		mid = Math.floor((start + end)/2);

		if ( num === sortedArray[mid] ){
			return true;
		} else if (num < sortedArray[mid]){
			end = mid - 1;
		} else if ( num > sortedArray[mid]){
			start = mid + 1;
		}
	}

	return false;
}

let hashTwoSum = ( array, sum ) => {
  let hashMap = {},
      results = []
  
  for (let i = 0; i < array.length; i++){
    if (hashMap[array[i]]){
      results.push([hashMap[array[i]], array[i]])
    }else{
      hashMap[sum - array[i]] = array[i]
    }
  }
  return results
}
