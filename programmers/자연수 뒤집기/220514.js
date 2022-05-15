function solution(n) {
  return answer = n.toString().split('').map((str) => Number(str)).sort((a, b) => b - a);
  // 오른쪽부터 정렬이 필요할때 reverse()메서드 사용도 가능하지만 큰숫자부터 정렬을 할때는 sort 사용!
}