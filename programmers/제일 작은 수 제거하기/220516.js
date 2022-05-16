function solution(arr) {
  var answer = [];

  if (arr.length <= 1) { //배열 요소 개수가 1이거나 빈 배일인 경우
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(arr)), 1);
    // 배열 요소 중 작은 수를 찾아 인덱스값을 알아내어 삭제해준다.
    return answer = arr;
  }
}