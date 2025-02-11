/**
 * [(lv.2)빈도수 세기.js]
 *
 * 1) getFrequency(arr)는 주어진 배열 내 요소들의 등장 횟수를 객체로 반환합니다.
 *    예: getFrequency(["apple", "banana", "apple"]) -> { apple: 2, banana: 1 }
 * 2) reduce, forEach 등을 이용할 수 있습니다.
 * 3) 문자열, 숫자 등 어떤 타입이든 동작하도록 처리하세요. -> Map
 *
 * @param {any[]} arr
 * @returns {object} - key: 원소 값, value: 등장 횟수
 */

// TODO: 함수를 작성하세요.
function getFrequency(arr) {
  let count;
  let result = new Map();
  arr.forEach((item) => {
    count = arr.filter((compare) => {
      return item === compare;
    }).length;
    // console.log("item", item, "/ count", count);
    result.set(item, count);
  });
  console.log('result', result)
  return Object.fromEntries(result);
  
  // let result = {};
  // arr.forEach((item) => {
  //   result[item] = (result[item] || 0) + 1;
  // });
  // return result;

  // return arr.reduce((map, item)=>{
  //   map.set(item, (map.get(item)||0)+1);
  //   return map;
  // }, new Map())
}

// 횟수를 카운트 할 변수 / 키 밸류를 담을 빈 객체 선언
// 배열의 요소를 순회하면서 (forEach) / 배열안에 같은 게... 음.... 무조건 1개는 있을거고... 필터... .length
// return 키 값 은 배열 요소 : 밸류는 카운트 변수

// export 를 수정하지 마세요.
export { getFrequency };
// new Map()
// Map.set(Key, value) 
// Map.get(Key)
// Map.has(key)
// Map.delete(key)//key에 해당하는 값 삭제
// Map.clear()//map안의 모든 요소 제거
// Map.size // 요소의 갯수 반환
// Map.keys()
// Map.values()
// Map.entries()