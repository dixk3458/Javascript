// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
// 0,2,4,6,... 18

// const multiple = {
//   [Symbol.iterator]() {
//     let count = 0;
//     return {
//       next() {
//         if (count < 10) {
//           return { value: count++ * 2, done: false };
//         } else {
//           return { value: undefined, done: true };
//         }
//       },
//     };
//   },
// };

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}

/**
 * 
아래는 주어진 코드의 동작 순서를 정리한 것입니다:

1. multiple 객체는 Symbol.iterator 메서드를 가지고 있습니다. 이 메서드는 이터레이터 객체를 반환합니다.
2. for...of 루프가 실행되면, 루프는 multiple 객체의 Symbol.iterator 메서드를 호출하여 이터레이터 객체를 가져옵니다.
3. 이터레이터 객체는 {next: function()} 형식의 객체입니다.
4. 루프는 이터레이터 객체의 next() 메서드를 호출하여 첫 번째 값을 가져옵니다.
5. next() 메서드는 {value, done} 형식의 객체를 반환합니다.
  value: num 값의 2배입니다.
  done: num 값이 max보다 큰지 여부에 따라 결정됩니다.
6. 첫 번째 값이 console.log()를 통해 출력됩니다.
7. 루프는 이터레이터 객체의 next() 메서드를 반복적으로 호출하여 다음 값을 가져옵니다.
8. done 값이 true가 될 때까지 6-7단계를 반복합니다.
9. 루프가 종료되면 순회가 완료됩니다.
 */
