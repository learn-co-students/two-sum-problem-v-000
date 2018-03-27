const bruteForceTwoSum = (array, sum) => {
	const results = [];

	for (let i = 0; i < array.length; i++) {
		for (let k = i + 1; k < array.length; k++) {
			array[k] === sum - array[i] ? results.push([array[i], array[k]]) : null;
		}
	}

	return results;
}

function binarySearch(arr, i) {
	var mid = Math.floor(arr.length / 2);
	if (arr[mid] === i) {
		return true;
	} else if (arr[mid] < i && arr.length > 1) {
		return binarySearch(arr.slice(mid), i);
	} else if (arr[mid] > i && arr.length > 1) {
		return binarySearch(arr.slice(0, mid), i);
	} else {
		return false;
	}
}

function binarySearchTwoSum(array, sum) {
	var pairs = [],
		sortedArray = array.sort(),
		complement,
		sortedSubArray;

	sortedArray.forEach(function (num, index) {
		complement = sum - num;
		sortedSubArray = sortedArray.slice(index + 1, sortedArray.length);
		if (binarySearch(sortedSubArray, complement)) {
			pairs.push([num, complement])
		}
	});
	return pairs;
}

function binaryMatch(unsortedArr, target) {
	let results = binarySearchTwoSum(unsortedArr, target);
	return results.length > 0 ? true : false;
}


const findMinAndRemoveSorted = arr => {
	const minVal = arr.shift();
	return minVal;
}

function merge(firstArray, secondArray) {
	const sortedArr = [];

	while (firstArray.length > 0 && secondArray.length > 0) {
		firstArray[0] < secondArray[0] ? sortedArr.push(firstArray.shift()) : sortedArr.push(secondArray.shift());
	}

	return sortedArr.concat(firstArray).concat(secondArray);
}

function mergeSort(array) {
	let midpoint = array.length / 2
	let firstHalf = array.slice(0, midpoint)
	let secondHalf = array.slice(midpoint, array.length)

	return array.length < 2 ? array : merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

const hashTwoSum = (array, sum) => {

	//create hash map and results array

	const hashMap = {},
		results = []

	//iterate through array
	for (let val of array) {

		//if hash map contains current value as key, push current value key and key value( aka compliment )

		if (hashMap[val]) {
			results.push([hashMap[val], val])
		} else {
			hashMap[sum - val] = val
		}
	}

	//return results
	return results
}