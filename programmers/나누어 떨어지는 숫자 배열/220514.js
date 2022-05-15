function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i])
    }
  }
  answer.sort((a, b) => a - b); //sort() : 배열의 요소를 정렬한 후 그 배열을 반환
  if (answer == '') {
    answer.push(-1)
  }
  return answer;
}