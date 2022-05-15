function solution(s) {
  let checkNum = parseInt(s);
  // parseInt(숫자로 변환할 문자열)
  // string을 정수로 변환한 값을 리턴. 만약 첫 글자를 정수로 변경할 수 없으면 NaN을 리턴.
  if ((s.length === 4 | s.length === 6) && s == checkNum) { // s == NaN x
    return true
  } else {
    return false
  }
}