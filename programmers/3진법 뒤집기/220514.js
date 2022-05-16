function solution(arr) {
  let a = arr.reduce((a, b) => a + b) / arr.length
  return a;
}