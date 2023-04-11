// let 재할당 가능
let a = 1;
a = 2;

// const 재할당 불가능
// 1. 상수
// 2. 상수변수 또는 변수

const text = 'hello';
// text = "hi"; 이렇게 하면 에러!

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
// 재할당이 필요한 곳 이 아니라면 const 사용하기
// Programming 에서는 const 선호
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

// 메모리 주소는 변화가 없기 때문이다.
// 메모리 주소가 가리키는 곳에 가서 변화가 생기기 때문이다.

console.log(apple);
apple.name = '오렌지';
console.log(apple);
apple.display = '🍊';


