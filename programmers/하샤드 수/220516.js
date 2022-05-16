function solution(x) {
  let result = true;
  let arr = String(x).split('')
  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]) //문자열 -> 정수
  }
  return result % 2 == 0 ? true : false;
}