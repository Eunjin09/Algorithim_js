function solution(strings, n) {
  // 문자열의 n번째 글자를 기준으로 오름차순으로 정렬
  strings.sort(function (a, b) {
    // console.log(a,b)
    if (a[n] !== b[n]) {
      return a[n].localeCompare(b[n]);
      // 단, 문자열의 n번째 글자가 같은 경우에는 전체 문자열을 기준으로 사전 순으로 정렬
    } else {
      return a.localeCompare(b);
    }
  })

  return strings;
}

// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순으로 정렬한다.

// * sort()를 이용하여 맨 앞글자를 비교해서 정렬을 해주는 것을 사용해서 n번째글자를 각 단어 맨 앞으로 옮겨서 자리를 바꾼다음
// 다시 제자리에 갖다놓는 방법을 생각

// localeCompare : 참조 문자열이 정렬 순서에서 앞 또는 뒤에 오는지 또는 주어진 문자열과 같은지를 숫자로 반환
// referenceStr.localeCompare(compareString[, locales[, options]])
// 문자열.localeCompare(참조 문자열) // 'a'.localeCompare('b')
// 현재 문자가 참조문자 보다 앞에 있으면 -1
// 현재 문자가 참조문자 보다 뒤에 있다면 1
// 같다면 0