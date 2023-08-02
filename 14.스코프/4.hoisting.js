// 자바스크립트 엔진은 코드를 실행하기전에
// 한번 스캔 과정을 거치는데, 그때 변수,함수,클랙스의 선언부를
// 코드의 최상단으로 끌러올려준다.
// 그것이 Hoisting

// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문 선언 이전에도 호출이 가능함

print();

function print() {
  console.log('Hello');
}

// 변수(let ,const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전 ,변수에 접근하면 컴파일(빌드) 에러 발생

let hi = 'hi';
console.log(hi);

const func1 = function () {};
func1();

class Cat {}
const cat = new Cat();

let a;
console.log(a);

let x = 1;
{
  console.log(x);
  //   에러 발생
  let x = 2;
}
