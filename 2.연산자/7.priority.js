let a = 2;
let b = 3;
let result = a + b * 4;
// 수학에서 연산자 우선순위 똑같이 적용
console.log(result);

result = a++ + b * 4;
console.log(result);
console.log(a);

// 우선순위 조정할때는 괄호로 씌워주자.
result = (a + b) * 4;
console.log(result);
