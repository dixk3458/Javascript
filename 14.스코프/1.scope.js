// 코드 블럭 : { }, if(){}, for(){}, function (){}

// 블럭 외부에서는 블럭 내부의 변수를 참조할수없다.bar__bg
{
  const a = 'a';
  console.log(a);
}
// scope 밖에서 접근 불가
console.log(a);
const b = 'b';

function print() {
  const message = 'Hello World';
  console.log(message);
}
// 함수 안에서 정의된 message의 scope는 함수 안쪽으로 정해짐
// 따라서 함수 밖에서 message 접근 불가
console.log(message);

// 매개변수 역시 마찬가지이다.
function sum(a, b) {
  return a + b;
}
