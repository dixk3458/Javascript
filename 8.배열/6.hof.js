// 고차함수

const fruits = ['🥝', '🍓', '🍇'];

// Array.forEach() : 배열을 빙글빙글 돌면서 배열에 있는 요소 하나씩 특정한 일을 할때 사용
// 보통을 value만 필요로 한다. 그래서 index,array등 나머지 생략가능

fruits.forEach(function (value) {
  console.log(value);
});

console.log('-------------------');

// 그리고 보통은 Arrow function 을 사용한다.
fruits.forEach(value => console.log(value));

// Array.find() : 제일 먼저 조건에 맞는 아이템을 반환한다.

const item1 = { name: '🥝', price: 1 };
const item2 = { name: '🍓', price: 2 };
const item3 = { name: '🍇', price: 3 };
const item4 = { name: '🍓', price: 4 };

const products = [item1, item2, item3, item4];

let result = products.find(value => {
  // 값을 바로 리턴 하는 경우에는 return 문을 생략할수있다.
  return value.name === '🍓';
});

console.log(result);

// Array.findIndex() : 위와 같지만, 인덱스를 반환해준다.
result = products.findIndex(value => value.name === '🍓');
console.log(result);

// Array.some() : 배열의 아이템들이 부분적으로 조건에 맞는지 확인해준다.
result = products.some(value => value.name === '🍓');
console.log(result);

// Array.some() : 배열의 아이템들이 전부 조건에 맞는지 확인해준다.

result = products.every(value => value.name === '🍓');
console.log(result);

// Array.filter() : 조건에 맞는 아이템들을 새로운 배열로 저장하여 반환한다.
result = products.filter(value => value.name === '🍓');
console.log(result);

console.clear();

// Array.map() : 기존 배열의 아이템을 새로운 아이템으로 매핑한 배열을 리턴해준다.

const nums = [1, 2, 3, 4, 5, 6];

result = nums.map(item => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});

console.log(result);

// Array.flatMap() : 배열안에 또 다른 배열이 중첩되어있다면, 풀어서 매핑해준다.

result = nums.flatMap(item => [1, 2]);

console.log(result);

// Array.sort() : 배열의 아이템을 정렬해주는 함수이다. 기존의 배열을 수정한다.
const numbers = [1, 3, 20, 4, 2];

numbers.sort();
// sort()는 문자열로 바꾸어 처리하기때문에 주의해야한다.
console.log(numbers);

// 콜백함수를 전달하여 원하는 정렬을 할수있다.
numbers.sort((a, b) => a - b);
console.log(numbers);

// 0 > a-b : a가 앞으로 정렬 : 오름
// 0 < a-b : b가 앞으로 정렬 : 내림


// Array.reduce(()=>{},초기값) : 배열의 아이템에 원하는 행동을 한다음에 최종적으로 결과 값 한개를 반환한다.
result = numbers.reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
