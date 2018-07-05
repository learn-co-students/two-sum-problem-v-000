function bruteForceTwoSum(array, sum){
    let matchingPairs = []
    let num1

    while (array.length > 0){
        // pop() would be faster but test is hard-coded to expect shift() :(
        num1 = array.shift()
        for (let num2 of array){
            if (num1 + num2 === sum){
                matchingPairs.push([num1, num2])
            }
        }
    }

    return matchingPairs
}
