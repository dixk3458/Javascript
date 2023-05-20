function add(a, b) {
  return a + b;
}

const result = add(1, 2);
console.log(result);

// 함수에서 명시적으로 return을 정하지 않으면, 자동으로 undefined가 반환됨
function sum(a, b) {}
console.log(sum(1, 2));

function print(text) {
  console.log(text);
}

print(
  '즉 특정한 행동만 하고 아무것도 안해된다면, 굳이 return을 작성할 필요 없다.'
);

// return 을 함수 도입부분에 작성하여, 원하지 않는 값이라면 바로 끝낼수있다.

console.clear();

function printNumber(num) {
  if (num > 10) {
    return;
  }
  console.log(num);
}

// 즉 조건이 맞지 않는 경우, 함수 도입부분에서 함수를 일찍이 종료함!

printNumber(2);

printNumber(12);
