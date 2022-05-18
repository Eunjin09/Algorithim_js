function solution(nums) {
  let answer = 0;
  const len = nums.length;

  // i,j,k를 돌려 모든 경우의 수 합
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        let sum = nums[i] + nums[j] + nums[k];    //즉, 길이가 4인 배열의 경우 인덱스 0+1+2, 0+1+3, 0+2+3, 1+2+3의 값을 구해 소수를 판별하면 된다.
        // = 7 / 11 / 13 / 17
        if (isPrime(sum)) { //소수라면 정답 count++
          answer++;
        }
      }
    }
  }

  function isPrime(sum) {                 // 7 = 1, 7
    if (sum < 2) return true;           // 소수는 1보다 큰 자연수 
    for (let i = 2; i < sum; i++) {         // [2 3 4 5 6] 1과 7을 빼고 나눴을 때 나머지 0 이면 이건 소수가아니다
      if (sum % i == 0) return false; // 1과 자신만 나눌수있는 수 찾기
    }
    return true;
  } // 2부터 소수를 판별할 수 있으니 2를 먼저 return 해주고 
  // 나머지는 반복문을 이용해 나눠지는 수가 있는지 계산해보고 나눠지면 false : true
  return answer;
}