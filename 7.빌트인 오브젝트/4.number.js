// Number.EPSILON;

const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}

// Number.EPSILON 은 0과 1사이의 가장 작은 수를 말한다.
// 즉 이진수의 연산에서 발생하는 작은 오차를 허용할때 아래와 같이 사용한다.
console.log(Number.EPSILON);

console.log(isEqual(1, 1));
console.log(isEqual(num, 0.1));

// Number.toFixed() : 반올림하여 문자열로 반환해준다.

const num2 = 123.51;
console.log(num2);
console.log(num2.toFixed());

// Number.toExponential() : 지수 표기법으로 표현해준다.
const num3 = 123.4;
console.log(num3.toExponential());

//Number.toPrecision(자리수) : 원하는 유효 자리수 까지 표현하여 반올림해준다.
const num4 = 1234.561;
console.log(num4.toPrecision(5));
