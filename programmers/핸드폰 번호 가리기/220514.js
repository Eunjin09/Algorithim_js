function solution(phone_number) {
  var answer = '';
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer += '*'
    } else {
      answer += phone_number[i]
    }
    i < phone_number.length - 4 ? answer += '*' : answer += phone_number[i]
  }
  return answer;
}