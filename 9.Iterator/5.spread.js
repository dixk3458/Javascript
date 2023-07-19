// 모든 Iteratble 객체는 spread를 사용할수있다.
// [...iterable]
// {...obj}
//function(...iterable)

function add(a, b, c) {
  return a + b + c;
}

// nums 배열을 촤르르 펼쳐서 하나씩 전달해준다.
const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
// 함수의 인자를 몇개를 받아야할지 모를때 사용한다.
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4, 5, 6, 7);

// Array.concat()
const fruits1 = ['🍎', '🥝'];
const fruits2 = ['🍓', '🍇'];

// let arr = fruits1.concat(fruits2);
let arr = [...fruits1, '❓', ...fruits2];
console.log(arr);

// Object
const jaewoong = {
  name: '정재웅',
  age: 25,
//   복사가 될때 shallow copy가 일어난다.
// 즉 home 키 안에는 주소값이 복사된다.
  home: { address: '전라북도 전주시 송천동' },
};
const updated = {
  ...jaewoong,
  job: 's/w engineer',
};

console.log(updated);
console.log(jaewoong);

updated.home.address = '서울';
console.log('jaewoong: ', jaewoong.home);
console.log('updated: ', updated.home);
