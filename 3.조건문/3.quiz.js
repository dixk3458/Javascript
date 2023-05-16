// 퀴즈!
// num의 숫자가 짝수이면 👍 ,홀수라면 👎 출력하기
// if
// ternary

let num = 2;

// if

if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// ternary

// console.log 가 많아 지저분하다.
// num % 2 === 0 ? console.log('👍') : console.log('👎');
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
