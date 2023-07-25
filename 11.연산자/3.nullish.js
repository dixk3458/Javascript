// Nullish Coalishing Operator
// ||는 falshy값 전부 기본 값 출력을 해주었지만,
// ??는 null, undefined 인경우에만 기본 값 설정을 해준다.

let num = 0;
// console.log(num || -1);

console.log(num ?? -1);
