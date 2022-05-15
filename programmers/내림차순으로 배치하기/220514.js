function solution(n) { // 내림차순으로 리턴
  return parseInt(String(n).split('').sort((a, b) => b - a).join(''))
  // string으로 숫자를 문자열로 변경
  // split으로 하나씩 나누어 배열로 저장 [1,1,8 ..]
  // sort로 내림차순 (b-a), 오름차순(a-b)
  // join('')모든 요소를 하나의 문자열로 리턴
}