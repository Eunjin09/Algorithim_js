function solution(lottos, win_nums) {
  var answer = [];

  const result = lottos.filter(lotto => win_nums.includes(lotto)).length
  // [1,31] 새배열로 만든 다음 .length -> lottos.length를 result= 2 담는다.
  // lottos배열을 순회하며 당첨배열에 있는 수를 리턴하고 총 개수를 result 저장.
  // filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환.
  // includes : 배열에 특정 요소를 포함하고 있는지 판별.
  // result = 당첨번호의 갯수

  const zeros = lottos.filter(lotto => lotto === 0).length;
  // 0인 요소만을 담고 [0,0].length ->zeros.length를 zeros= 2 담는다.
  // lottos배열을 순회하며 0이면 리턴후 총 개수를 zeros에 저장.
  console.log(result, zeros) // 2,2

  let min = 6 - result >= 6 ? 6 : 7 - result; //최저 순위는 6이 나와야하기 때문에 7에서 빼준다.(6-6 = 0 x)
  // 최저 순위 = 7에서 맞은 개수를 빼면되는데 맞은 갯수가 0일 경우 7위가 됨으로 6위로 변경해준다.
  // result가 0일 경우 true인 6이 리턴
  // min = 6-2=5 >= 6 ? 
  // min = 전체-맞은개수


  let max = min - zeros <= 1 ? 1 : min - zeros;
  //최고 순위 = 최저순위 - 0의 개수(2) < 1 ?
  // 5-2 > 1 ? 1 : 5-3


  return answer = [max, min]
  // lottos : 구매한 로또 번호를 담은 배열
  // win_nums : 당첨 번호를 담은 배열

  // 결과값 : [당첨 가능한 최고 순위, 최저 순위]
}