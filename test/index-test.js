describe('#bruteForceTwoSum', function() {
  it('collects each pair of numbers with a matching sum', function() {
    let array = [2, 3, 4, 3, 6, 7];
    let sum = 6;
    expect(bruteForceTwoSum(array, sum)).toEqual([[2, 4], [3, 3]]);
  });
});

describe('#binarySearchTwoSum', function() {
  it('collects each pair of numbers with a matching sum', function() {
    let array = [2, 3, 7, 3, 6, 4];
    let sum = 6;
    expect(binarySearchTwoSum(array, sum)).toEqual([[2, 4], [3, 3]]);
  });
});

describe('#binaryMatch', function() {
  it('returns true when a match is found', function() {
    let missingNum = 6;
    let sortedArray = [2, 3, 3, 4, 6, 7];
    expect(binaryMatch(sortedArray, missingNum)).toEqual(true);
  });
});

describe('#hashTwoSum', function() {
  it('collects each pair of numbers with a matching sum', function() {
    let array = [2, 3, 4, 3, 6, 7];
    let sum = 6;
    expect(hashTwoSum(array, sum)).toEqual([[2, 4], [3, 3]]);
  });
});
