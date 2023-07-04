// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌','🍓','🍇','🍓']
// output: ['🍌','🥝','🍇','🥝']

// 삼항 연산자 사용 익숙해지기

function replace(array, from, to) {
  return array.map(value => (value === from ? to : value));
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input:['🍌','🥝','🍇','🥝'],'🥝'
// output: 2

const array2 = ['🍌', '🥝', '🍇', '🥝'];

function count(array, item) {
  return array.filter(value => value === item).length;

  //   return array.reduce((count, value) => {
  //     if (value === item) {
  //       count++;
  //     }
  //     return count;
  //   }, 0);
}

console.log(count(array2, '🥝'));

// 퀴즈3:
// 배열1 아이템중 배열2에 존재하는 아이템만 담고있는 배열 반환
// input:['🍌','🥝','🍇'], ['🍌','🍓','🍇','🍓']
// output: ['🍌','🍇']

// 퀴즈3:
// 배열1 아이템중 배열2에 존재하는 아이템만 담고있는 배열 반환
// input:['🍌','🥝','🍇'], ['🍌','🍓','🍇','🍓']
// output: ['🍌','🍇']

function match(input, search) {
  const result = input.filter(value => search.includes(value));
  return result;
}

const array3 = ['🍌', '🥝', '🍇'];
const array4 = ['🍌', '🍓', '🍇', '🍓'];

console.log(match(array3, array4));

// 퀴즈 4
// 5이상의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums //
  .filter(num => num > 5) //
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(result2);
