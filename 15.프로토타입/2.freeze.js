// 동결! Object.freeze
// 동결된 객체의 property 추가❌ 삭제❌ 쓰기❌ 속성 재정의❌
// (단 , 얕은 꽁꽁 얼림)
// 즉 주인 정재웅은 변경 가능
const jaewoong = { name: '정재웅' };
const dog = { name: '퍼피', emoji: '🐶', owner: jaewoong };

Object.freeze(dog);
dog.name = '멍멍이';
console.log(dog);

dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

jaewoong.name = 'daniel';
console.log(jaewoong);

// 밀봉! Object.seal
// 밀봉은 값의 수정 가능, 추가❌, 삭제 ❌, 속성 재정의❌
const cat = {};
Object.assign(cat, dog);
// cat = {...dog} 와 유사
console.log(cat);

Object.seal(cat);
cat.name = '야옹이';
console.log(cat);

delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isFrozen(cat));

console.log(Object.isSealed(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions
const tiger = { name: '어흥이' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));

tiger.name = '어흥~~~~~~~~~';
// 추가❌
tiger.emoji = '🐯';
console.log(tiger);
