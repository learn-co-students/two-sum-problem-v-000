var bruteForceTwoSum = function (nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push([nums[i],nums[j]]);

            }
        }
    }
    return result;
}


function hashTwoSum(arr, target) {
    let numObject = {};
    for (var i = 0; i < arr.length; i++) {
        let thisNum = arr[i];
        numObject[thisNum] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
}
