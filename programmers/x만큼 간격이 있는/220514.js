function solution(x, n) {
  var result = [];
  for (let i = 1; i <= n; i++) {
    result[result.length] = x * i
  }
  return result;
}