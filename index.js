function bruteForceTwoSum(array, sum) {
	let results = []
	for (var i = 0; i < array.length; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === sum) {
				results.push([array[i], array[j]])
			}
		}
	}
	return results
}

function binaryMatch(sortedArray, missingNum) {
	let first = 0
	let last = sortedArray.length - 1
	let mid
	while (first <= last) {
		mid = Math.floor((first + last)/2)
		if (missingNum === sortedArray[mid]){
			return true
		} else if (missingNum < sortedArray[mid]){
			last = mid - 1
		} else if (missingNum > sortedArray[mid]){
			first = mid + 1 
		} else {
			return false
		}
	}
}

function binarySearchTwoSum(array, sum) {
	let sortedArray = array.sort() 
	let results = []
	let includedIndices = {}
	for (var i = 0; i < sortedArray.length; i++) {
		let other = sum - sortedArray[i]
		let otherIndex = sortedArray.indexOf(other)
		if (binaryMatch(sortedArray,sum - sortedArray[i]) && !includedIndices[otherIndex]) {
			includedIndices[i] = true
			includedIndices[otherIndex] = true
			results.push([sortedArray[i], other])
		}
	}
	return results
}


function hashTwoSum(array, sum) {
	let results = []
	let hash = {}
	for (const num in array) {
		if (!hash[array[num]]){
			hash[array[num]] = 1
		} else {
			hash[array[num]] ++
		}
	}
	
	for (const num in array) {
		let missingNum = sum - array[num]
		if (hash[missingNum] > 0) {
			results.push([array[num],missingNum])
			hash[array[num]] = 0
		}
	}
	return results
}