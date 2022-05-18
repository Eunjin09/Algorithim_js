function solution(s, n) {
  //각 문자열 자르기
  var answer = s.split("");
  let result = [];
  answer.forEach((el, idx) => {
    //띄어쓰기는 미는거 제외
    //console.log(s.charCodeAt(idx)) 65, 66./ 122 / 97, 32,66,32,122
    // 
    if (s.charCodeAt(idx) === 32) { //아스키코드로 변경 후 공백 확인(3번째)
      result.push(String.fromCharCode(32)); // 아스키코드 -> 빈 문자열로 변경 후 푸시
      // console.log(result)
      return;
    }

    //아스키코드 변환
    let r = s.charCodeAt(idx);
    // console.log(r)

    //Z 다음 A가 나와야하므로
    if (r >= 65 && r <= 90) { // A-Z : 65 - 90  (대문자인 경우)
      //Z범위 넘어갈 경우 26만큼 빼고 아니면 n만큼 민다.
      r = r + n > 90 ? r + n - 26 : (r += n); // 90을 넘는다면(Z+n) ? 65(a) : 다음값을 담는다
    }

    //z 다음 a가 나와야하므로
    if (r >= 97 && r <= 122) { // a-z : 97 - 122  (소문자인 경우)
      r = r + n > 122 ? r + n - 26 : (r += n); // 122을 넘는다면(z+n) ? 97(a) : 다음값을 담는다
    }
    result.push(String.fromCharCode(r)); // 아스키코드 -> 문자열로 변경 후 푸시
  });
  //배열 합치기
  // console.log(result)
  answer = result.join("");
  return answer;
}

// forEach() : 주어진 함수를 배열 요소 각각에 대해 실행.
// 사용 코드 : arr.forEach(callback(currentvalue[index[array]])(this))
// 사용 코드 : arr.forEach(각 요소에 실행할 함수. 다음 세가지 매개변수를 받는다(처리할 현재요소[처리할 현재요소 인덱스[forEach를 호출한 배열]])(callback을 실행할 때 this로 사용할 값)) = 세 가지 인수 (요소 값, 요소 인덱스, 순회 중인 배열)
// forEach()는 주어진 콜백을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행.

// charCodeAt() : 문자열중 하나를 선택하여 아스키코드 번호로 변환해주는 함수
// fromCharCode() : 아스키코드번호를 받아 문자열을 구성해주는 함수