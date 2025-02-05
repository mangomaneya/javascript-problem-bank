/**
 * [(lv.3)deepClone.js]
 *
 * 중첩 객체와 배열을 복사하는 깊은 복사 함수를 작성하세요.
 * 재귀를 통해 객체나 배열을 만나면 내부까지 복사해야 합니다.
 *
 * @param {*} obj - 복사할 대상
 * @returns {*} 깊은 복사된 결과
 */

// function deepClone(obj) {
//   const result = {}; // 결과를 담을 빈 객체를 생성
//   if (typeof obj === "object" && obj !== null) {
//     // 인자의 타입이 객체이고, 인자가 비어있지 않은 경우에만 수행
//     for (let key in obj) {
//       // 인자의 모든 속성을 순회
//       result[key] = deepClone(obj[key]); //함수를 호출하여 재귀적으로 복사
//       //obj[key]이 객체이면 다시 이 함수를 호출해서 복사하고 객체가 아니면 그대로 result에 복사
//     }
//   } else {
//     result = obj;
//   }

//   return result;
// }

const deepClone = (obj) => {
  if (typeof obj !== "object" && obj === null) {
    return obj;
  }
  const result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
};

// export 를 수정하지 마세요.
export { deepClone };
