// 배열
// 일반적으로 배열은 동일한 타입의 데이터가 저장되어있는 집합을말한다.
// 하지만 자바스크립트는 타입이 따로 정해져있지 않아, 배열에 다른 타입이 들어가는것을 허용한다.
// 권장하는 방법은 아니다.

// 배열 생성방법
// 1. Array클래스
// 인자에 배열의 사이즈를 정하거나, 실제 데이터를 정할수있다.
let array = new Array();
console.log(array);

// 2. Array.of()

let anotherArray = Array.of(1, 2, 3, 4, 5);
console.log(anotherArray);

// 3. Array.from() : 다른 배열로부터 새로운 배열을 만들수있다.
array = Array.from(anotherArray);
console.log(array);

// 4. 배열 리터럴 []
array = [1, 2, 3, 4];
console.log(array);

/**
 * 일반적으로 배열은 동일한 메모리 크기를 가져야하고
 * 연속적으로 이어져있어야한다.
 * 하지만 자바스크립트의 배열은 연속적으로 이어져있지 않고 오브젝트와 유사하다.
 * 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.
 * 이것을 보완하기 위해 타입이 정해진 배열을 지원한다.
 *
 */

array = Array.from({
  0: '정',
  1: '재',
  2: '웅',
  length: 3,
});

// 즉 오브젝트로부터 배열을 만들수있다. 인덱스키와 length키만 있다면,
console.log(array);
