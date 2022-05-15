function solution(a, b) {
  // toString() : 문자열을 반환하는 objeect 방법
  // slice(0,3) : 0부터 3전까지 -> 0,1,2 -> tue
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase()
}