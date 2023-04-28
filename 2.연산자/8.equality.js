// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);

// 타입은 다르지만, 비교를 할때 문자열 2가 숫자로 변환되어 비교한다.
console.log(2 == '2');
// 타입까지 비교하면 다르다.
// 코딩을 할때 타입까지 비교하는게 좋다.
console.log(2 === '2');

console.log(true == 1);
console.log(true === 1);

console.clear();

const obj1 = {
  name: 'jaewoong',
};

const obj2 = {
  name: 'jaewoong',
};

// 서로다른 참조값(메모리주소)을 가지기때문에 false
console.log(obj1 === obj2);

// 참조값에 접근해서 name을 비교
console.log(obj1.name === obj2.name);

let obj3 = obj2;

// 같은 값(동일한 주소값)을 가지기때문이다.
console.log(obj3 === obj2);
