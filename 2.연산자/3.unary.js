// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a; //-1 * 5
console.log(a);

a = -a;
console.log(a);

let boolean = true;
console.log(boolean);

console.log(!boolean);
// 값을 boolean값으로 변환할수있다.
console.log(!!boolean);

console.clear();

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인 할 수있다.
console.log(+false);
console.log(+null);
console.log(+'');

console.log(+true);
console.log(+'text'); //숫자로 변환 X. NaN 
console.log(+undefined); //숫자로 변환 X. NaN
