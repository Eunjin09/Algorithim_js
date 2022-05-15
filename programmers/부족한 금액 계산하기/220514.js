function solution(price, money, count) {
  let result = 0;
  for (let i = 0; i <= count; i++) {
    result += price * i
    // result = 이용료*i
    // 4번 순회하여 모든 값을 더하고
  }
  return result > money ? result - money : 0
  // 이용료보다 현재 금액이 부족하다면 이용료-현재금액을 리턴, 부족하지 않다면 0 리턴
}