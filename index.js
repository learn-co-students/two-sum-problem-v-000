function bruteForceTwoSum (array, sum) {
    //[0,1,5,4,], 6
    //iterate over each element in the array and compare it to every other element
    let result = []
    for (let i=0; i<array.length; i++){
        for (let j = i+1; j<array.length; j++){
            if( sum - array[j] === array[i] ){
                result.push([array[i], array[j]])
            }
        }
    }
    return result
}

function binarySearchTwoSum(array, sum){
    let result = []
    let sortedArr = array.sort()

    for(let i = 0; i<sortedArr.length; i++){
        let difference = sum - sortedArr[i]
        let arrToSearch = sortedArr.slice(i+1, sortedArr.length)

        if (binaryMatch(arrToSearch, difference)){
            result.push([sortedArr[i], difference])
        }
    }
    return result
}

function binaryMatch(array, num){
    let arr = array.sort()

    if (arr.length < 2 ){
        return array[0] === num //is first element equal to value? should return a boolean
    }

    let mid = Math.floor(arr.length/2)
    let midpoint = arr[mid]
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)

    if(num < midpoint){
        return binaryMatch(left, num)
    }else if(num > midpoint){
        return binaryMatch(right, num)
    }else if(num === midpoint){
        return true
    }

}


function hashTwoSum(array, sum){
    let result = []
    let hash = {}
    
    //{3:true, 4: true, 7:true}
    // [3,4,7] we want each of the elements in array to be the key in key:value pair of hash,
    //and the two keys should add up to sum 

    array.map(element => hash[element] = true)

    //example if sum = 6, the two numbers that add up to 6 have to be either two equal halves 
    //or one has to be less than sum/2 so like 1,5 , 2,4, 3,3 , 0, 6

    for (let i=0; array[i] <= sum/2; i++){
        let difference = sum - array[i]

        if(hash[difference]){
            result.push([array[i], difference]);
        }
    }

    return result;

}