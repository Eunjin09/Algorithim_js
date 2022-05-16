function solution(arr) {
  return arr.filter((el, i) => el != arr[i + 1]);
}
// 현재 인덱스의 요소와 다음 인덱스의 요소가 다르면 새로운 배열에 추가
// Array.filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 메서드
// 필터조건을 만족하는 값이 없으면 '' 
// [1,1]='' [1,3] = 1 [3,0] = 3 [0,1] = 0 [1.''] = 1
//  마지막요소는 undefined와 비교

// 다른 풀이
function solution(arr) {
  var answer = [];

  for (var i = 0; i < arr.length; i++) {
    arr[i] !== arr[i + 1] ? answer.push(arr[i]) : '';
    // 현재와 다음의 문자가 다른 문자인지 확인 후 다를경우에만 현재문자를 새 배열에 추가 : 무시
  }
  return answer;
}