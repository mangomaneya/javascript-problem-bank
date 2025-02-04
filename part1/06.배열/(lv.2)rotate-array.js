/**
 * [(lv.2)rotate-array.js]
 *
 * 배열 arr의 마지막 요소를 맨 앞으로 이동하여, 오른쪽으로 한 칸씩 이동된 새 배열을 반환하세요.
 * 예) [1, 2, 3] -> [3, 1, 2]
 *
 * @param {any[]} arr
 * @returns {any[]} 요소가 오른쪽으로 한 칸씩 이동된 새 배열
 */
function rotateArray(arr) {
  // TODO: 원본을 변경하지 않고, 마지막 요소를 맨 앞으로 이동한 새 배열을 반환
  // pop배열의 마지막 요소를 없애고 / unshift 배열에 맨 앞에 요소를 추가
  // 새 배열은... 스프레드오퍼레이터로 복사하고 시작하기
  const newArr = arr.map((e)=>e);
  newArr.unshift(newArr[newArr.length -1]);
  newArr.pop();
  
  console.log("뉴어레이는 =>",newArr);
  return newArr;
}

// export를 수정하지 마세요.
export { rotateArray };
