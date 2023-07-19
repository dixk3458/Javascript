// const multiple = {
//     [Symbol.iterator]() {
//       const max = 10;
//       let num = 0;
//       return {
//         next() {
//           return { value: num++ * 2, done: num > max };
//         },
//       };
//     },
//   };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
    }
  } catch (error) {
    console.log('Error!');
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// return()을 하는순간 순회가 끝난다.
// multiple.return();

// Error를 던지는 순간 프로그램이 멈춘다.
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
