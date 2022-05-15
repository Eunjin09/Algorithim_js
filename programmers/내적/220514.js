function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i]
    // 각 배열의 0부터 마지막까지 a배열의 값과 b배열의 값을 곱한 후 더하기
    // answer = answer + (a[0]*b[0])
  }
  return answer;
}