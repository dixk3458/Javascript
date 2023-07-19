// 구조 분해 할당
// 데이터 뭉치(그룹화)를 쉽게 만들수있다.
// 구조를 분해하여 조금더 의미있는 이름을 부여할수있다.
const fruits = ['🍓', '🍇', '🥝', '🍎'];
const [first, second, ...others] = fruits;
console.log(first);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const jaewoong = { name: 'jaewoong', age: 25, job: 's/w engineer' };

function display(person) {
  const { name, age, job } = person;
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}

display(jaewoong);

const { name, age, job: occupation, pet = '강아지' } = jaewoong;
console.log(name);
console.log(age);
console.log(pet);
console.log(occupation);
