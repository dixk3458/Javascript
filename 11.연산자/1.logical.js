// 논리 연산자
// && 그리고
// || 또는

const obj1 = {
  name: '🐱',
};

const obj2 = {
  name: '🐶',
  owner: 'Jaewoong',
};

// 1. &&연산자
// 앞에 값이 truthy 인경우 뒤에 조건을 실행할때 사용한다.

function changeNewOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없습니다.');
  }
  animal.owner = '바뀐 주인';
}

obj1.owner && changeNewOwner(obj1);
obj2.owner && changeNewOwner(obj2);

console.log(obj1);
console.log(obj2);

// 2. ||연산자
// 앞에 값이 falshy 인경우 뒤에 조건을 실행할때 사용한다.

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('이미 주인이 있습니다.');
  }
  animal.owner = '새로운 주인';
}

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// 위와 같은 단축 평가는 null, undefined를 확인할수있다.

let item; // = { price: 1 };

// 즉 item이 있고 item.price에 접근해서 해주라. application이 죽지 않음
const price = item && item.price;
console.log(price);

// 기본값 설정
function print(message = 'default parameter') {
  //   const text = message || '기본값'; // message가 없다면 기본값 설정
  console.log(message);
}

// default parameter와의 차이점
// default parameter는 입력X , undefined인 경우만 설정
// 하지만 단축 평가는 falshy로 평가되는 모든것 설정

print(undefined);
print(null);
print(0);
print(false);
