// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments라는 객체에 저장됨

// 매개변수에 기본값을 지정할수있다. 다만 undefined일 경우에만 적용된다.
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);

  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
}

// 추가적인 인자를 전달하면, 무시된다.
add(2, 2);

// Rest 매개변수 Rest Parameters
// 얼마나 매개변수로 전달받아야 할지 모를때 배열로 전달받는다.

function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 3, 4, 5);
