function solution(sizes) {
  let answer = 0;
  let width = 0;
  let height = 0;

  for (let size of sizes) {
    const numA = size[0] < size[1] ? size[1] : size[0]; //60
    // 가로와 세로 중 더 긴 것을 담은 변수

    const numB = size[0] < size[1] ? size[0] : size[1]; // 50
    // 가로와 세로 중 더 짧은 것을 담은 변수

    width = width < numA ? numA : width; //0<60 ? 60 : 0
    height = height < numB ? numB : height;
    // 지갑의 가로와 세로를 최신화

  }
  // 지갑의 크기
  return answer = width * height;
}

// 다른 풀이
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
  // ratated에 sizes를 새롭게 배열한다 height whith 보다 크면 [h,w] 아니면 [w,h]
  // return rotated [[60,50],[70,30],[60,30],[80,40]]
  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => { //배열의 반복문
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  })
  return maxSize[0] * maxSize[1];
}
