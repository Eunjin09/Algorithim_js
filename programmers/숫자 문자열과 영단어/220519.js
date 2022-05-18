function solution(s) {
  var answer = s;
  var en_num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  for (let i = 0; i < en_num.length; i++) {       //영어 숫자만큼 반복 i가 0일때 배열도 0 결론 i=en_num
    arr = answer.split(en_num[i]);  //split으로 배열을 만들면서 영단어를 없애준다.
    answer = arr.join(i); // join으로 배열을 answer로 바꾸는데 사이에 i값을 넣어준다
    // test = arr.join('');
  }
  return Number(answer);
}
// function solution(s) {
//     let answer = 0;
//                                          // replace()에서 치환을 당담하는함수
//     s = s.replace(/zero/g, 0);            //  "/특정문자/" 특정문자를 제거해서 새로운 문자로 바꿈
//     s = s.replace(/one/g, 1);
//     s = s.replace(/two/g, 2);
//     s = s.replace(/three/g, 3);
//     s = s.replace(/four/g, 4);
//     s = s.replace(/five/g, 5);
//     s = s.replace(/six/g, 6);
//     s = s.replace(/seven/g, 7);
//     s = s.replace(/eight/g, 8);
//     s = s.replace(/nine/g, 9);

//     answer = Number(s);
//     return answer;
// }
