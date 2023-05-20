function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}

// 메모리에 함수의 이름 add는 코드블럭이 작성되어있는 주소를 가진다.
// 따라서 변수 sum에는 똑같은 참조값이 저장된다.
const sum = add;

console.log(add(1, 2));

// 인자에 아무것도 전달하지 않으면 undefined이 전달된다.
console.log(add());



