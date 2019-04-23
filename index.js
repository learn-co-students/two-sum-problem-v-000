
function bruteForceTwoSum(a, sum) {
  var answer = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] == sum) {
        answer.push([a[i], a[j]]);
      }
    }
  }
  return answer;
}
