function solution(n) {
  var num = Math.sqrt(n);
  console.log(num)
  // 제곱근을 구해주는 math메소드 (11, 1.7)

  //정수인지 판별하는 방법
  // 정수는 1로 나누었을 경우 항상 나머지가 0이 되는 속성을 이용해서 주어진 숫자가 정수인지 체크하는 방법
  return num % 1 === 0 ? (num + 1) * (num + 1) : -1
}