// Set는 배열과 유사하지만, 차이점이 있다.
// Set는 인덱스가 없어 순서가 없고
// 중복을 허용하지 않는다.
// 중복을 허용하지 않기때문에 , 중복된 값을 추가할경우 무시된다.

// Set사용법
// 빈 Set를 만들거나
// const set = new Set()
// 배열을 이용해 초기값을 설정해주어야한다.
const set = new Set([1, 2, 3, 4]);
console.log(set);

// Set의 프로퍼티 및 메서드

// Set의 사이즈 확인
console.log(set.size);

// Set에 item유무 확인
console.log(set.has(1));
console.log(set.has(6));

// Set은 iterable한 객체이다 따라서 다양한 순회연산을 수행할수있다.

set.forEach(item => console.log(item));

for (const item of set.values()) {
  console.log(item);
}

// Set에 item 추가하기
set.add(5);
console.log(set);
// Set는 중복을 허용하지 않기 때문에 , 무시되는것을 볼수있다.
set.add(5);
console.log(set);

// Set는 원시타입 데이터 뿐만아니라 , 객체 타입도 저장할수있다.
const jaewoong = { name: 'jaewoong', age: 25 };
const ellie = { name: 'ellie', age: 30 };
const objs = new Set([jaewoong, ellie]);
console.log(objs);

// 객체는 참조값이 저장된다는것을 유념하자! (Shallow copy)

// Set에 item 삭제하기
set.delete(5);
console.log(set);

// Set의 item 전부 삭제하기
set.clear();
console.log(set);
