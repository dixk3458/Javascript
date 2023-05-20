// 함수 선언문 function name(){}
// 함수 표현식 const name = function (){}

let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

// 화살표 함수 const name = (인자) => {실행코드}

add = (a, b) => {
  return a + b;
};

console.log(add(2, 4));

// 값 만 return 하는 함수라면 , 코드블럭 return 없이 바로 사용가능하다.

add = (a, b) => a + b;

console.log(add(5, 10));

// 생성자 함수 const object = new Function();

// IIFE (Immediately-Invoked Function Expressions)
// 함수를 괄호로 감싸게 되면, 값으로 변환이 되고 거기에 ()를 붙이면 호출하게 된다.
(function print() {
  console.log('안녕');
})();
