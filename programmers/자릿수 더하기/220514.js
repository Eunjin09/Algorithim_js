function solution(n){
  let answer = 0;
  let a = String(n); //문자열로 변환
  for(i=0; i<a.length; i++) {
    answer += parseInt(a[i]); //숫자로 변경해서 배열에 담기
  }
  return answer;
}

//효율적인 코드
function solution(n){
   const answer = String(n).split('').reduce((acc,cur) => acc += Number(cur),0)
}
// reduce((누적값, 현재값) => 누적값 += Number(현재값),초기값)
   
  // (문자열+정수 = 문자열) 방지차원으로 초기값 0(정수)이 필요!
  // reduce((누적값(0),현재값('1')) => 0(정수) += Number('1'),0)
  // 초기값이 없을 경우 : (문자열+정수 = 문자열)이기때문에 123이 출력
  // 초기값인 0이 누적값(0)으로 들어감!(처음 실행시 한번)
  // 문자열로 만들어 나누었기 때문에 다시 0을 초기값으로 넣어서 정수화를 해야 한다. (문자열+정수 = 문자열) 방지차원!