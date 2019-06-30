var bruteForceTwoSum = function (arr, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i],arr[j]]);

            }
        }
    }
    return result;
}


function hashTwoSum(arr, target) {
    let numObject = {};
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        let thisNum = arr[i];
        numObject[thisNum] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            result.push([arr[i], diff]);
        }
    }
    return result;
}
