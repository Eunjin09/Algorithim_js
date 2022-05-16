function solution(num, count = 0) { //count:0을 담을변수필요 =>  let count = 0;
  return num == 1 ? (count >= 500 ? -1 : count) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

// 재귀함수 : 같은 이름의 함수를 내부에서 실행시켜 주는 것. 무한히 반복됨,
// 따라서 반드시 함수를 종료하는 조건을 만들어 주어야 한다.
// 초기에 실행값으로 count를 지정해주고 return 삼항조건문으로 내부 코드 바로 실행.
// 1이지만 반복한 횟수가 500이 넘는다면 -1 ***
// 1이 아니라면 솔루션함수가 +1이되서 다시 함수를 실행한다.