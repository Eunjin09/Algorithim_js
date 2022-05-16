function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    // numbers의 배열의 길이 만큼 반복
    for (let j = i + 1; j < numbers.length; j++) {
      // numbers의 배열의 길이 + 1 만큼 반복
      // numbers[i] = numbers[0]
      // numbers[j] = numbers[1]
      let sum = numbers[i] + numbers[j];
      //ex sum=7    i=3    +      j=4
      if (answer.indexOf(sum) === -1) { //indexOf 메서드를 이용해 answer 배열에 내가 구한 합이 없다면 그 수를 담았다.
        //answer안에 sum값이 없다면 indexOf 함수에서 -1값을 반환합니다.
        //반환값 -1 === -1 을 하면 if 조건이 성립이 된다
        answer.push(sum);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}