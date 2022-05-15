function solution(s) {
  let answer = '';
  let words = s.split(' ') // 특정문자(' ')를 기준으로 문자열을 나누어 배열에 저장 ['try'.'hello','world']

  for (let i = 0; i < words.length; i++) { // 3
    for (let j = 0; j < words[i].length; j++) { // 3,5,5
      if (j % 2 == 0) { // 0,2,4,6 ..
        answer += words[i][j].toUpperCase()
      } else {
        answer += words[i][j]
      }
    }
    console.log(words.length)// 3
    if (i < words.length - 1) { // -1 : 마지막 index = ' ' //0<2[3개], 1<2, 2<2(끝)
      answer += ' ';
    }
  }
  return answer;
}

// 효율적인 코드
// function solution(s) {
// return s.split(" ").map((x) => x.split("").map((y,index) =>
// (index % 2 == 0 ? y.toUpperCase() : y.toLowerCase())).join("")).join(" ");
// }