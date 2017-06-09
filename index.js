function bruteForceTwoSum(array, sum) {
	var pairs = [];

	for (var i = 0; i < array.length; i++) {
		if (array[i] < sum) {
			for (var j = i + 1; j < array.length; j++) {
				if (array[i] + array[j] === sum) {
					pairs.push([array[i], array[j]]);
				}
			}
		}
	}

	return pairs;

}

function binaryMatch(sortedArray, target) {
	var lowerIndex = 0,
		upperIndex = sortedArray.length - 1,
		midpoint;

		while (lowerIndex <= upperIndex) {
			midpoint = Math.floor((lowerIndex + upperIndex) / 2);
			if (sortedArray[midpoint] === target) {
				return true;
			} else if (sortedArray[midpoint] < target) {
				lowerIndex = midpoint + 1;
			} else {
				upperIndex = midpoint - 1;
			}
		}
		return false;
}

function binarySearchTwoSum(array, sum) {
	var pairs = [],
		sortedArray = array.sort(),
		complement,
		sortedSubArray;

	sortedArray.forEach(function(num, index) {
		complement = sum - num;
		sortedSubArray = sortedArray.slice(index+1, sortedArray.length);
		if (binaryMatch(sortedSubArray, complement)) {
			pairs.push([num, complement])
		}
	});
	return pairs;
}

function buildArrayHash(array) {
	var arrayHash = {},
		hashString;
	array.forEach(function(num, index) {
		hashString = generateHashString(num);
		if (!arrayHash[hashString]) {
			arrayHash[hashString] = []
		}
		arrayHash[hashString].push(index);
	});
	return arrayHash;
}

function generateHashString(num) {
	return num.toString(10);
}

function hashTwoSum(array, sum) {
	var pairs = [],
		arrayHash = buildArrayHash(array),
		firstNum,
		hashString,
		complement,
		complementIndex;
	for (var i = 0; i < array.length; i++) {
		firstNum = array[i];
		complement = sum - firstNum;
		hashString = generateHashString(complement);
		if (arrayHash[hashString]) {
			for (var j = 0; j < arrayHash[hashString].length; j++) {
				complementIndex = arrayHash[hashString][j];
				if (complementIndex > i) {
					pairs.push([firstNum, complement]);
				}
			}
		}
	}
	return pairs;
}