// 동적으로 객체의 데이터 접근하기
// 평소에는 objName.key로 객체의 데이터에 접근하지만, 동적으로 접근하는경우에는 대괄호 표기법을 이용한다.

const jaewoong = {
  name: '정재웅',
  age: 25,
};

// 정적으로 객체의 데이터에 접근할때 (이미 객체의 데이터가 정해져있을때)
console.log(jaewoong.name);

// 에러가 발생한다.
// function getValue(obj, key) {
//   return obj.key;
// }
// console.log(getValue(jaewoong, age));

function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(jaewoong, 'age'));


