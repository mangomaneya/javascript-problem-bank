/**
 * [(lv.3)chunk.js]
 *
 * chunkArray 함수를 작성하세요.
 * - 배열(arr)과 덩어리 크기(size)를 입력받아, 해당 크기로 배열을 나눈 2차원 배열을 반환합니다.
 * - 마지막 덩어리는 나머지 원소만 포함됩니다.
 *
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]}
 */
// [[1,2],[3,4],[5]]
function chunkArray(arr, size) {
  //배열을 담을 배열
  // 기존 배열을 잘라낼 카운터
  const chunkArr = [];
  let counter = 0;

  // 카운터가 배열의 길이에 도달할 때 까지 반복
  while (counter < arr.length) {
    //배열을 잘라서 반환된 값을 chunkArr에 담는다
    chunkArr.push(arr.slice(counter, counter + size));
    //카운터의 숫자를 증가시킨다
    counter += size;
  }
  console.log(chunkArr)
  return chunkArr;
}

// export 를 수정하지 마세요.
export { chunkArray };
