// Iterable 하다는것 = 순회가 가능하다는것
// 순회가 가능하기 위해선 [Symbol.iterator](): Iterator;
// 위와같은 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알수있음
// 순회가 가능하면 무엇을 할 수 있나? for ...of, spread

const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

// values() 외에 다른 함수를 호출하면 얻을수있는 Iterator객체를 얻을수있다.
const iterator = array.values();

// Iterator 프로토콜을 따르기 위해서는 그 객체안에있는 next()를 호출했을때 계속 다음값을 반환할수있어야한다.
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// next()를 호출했을때 다음값이 없으면, undefined를 반환하고 done에는 true가 들어있는것을 볼수있다.
console.log(iterator.next());

// 깔끔 version

const iterator2 = array.values();
while (true) {
  const item = iterator2.next();
  if (item.done) break;
  console.log(item.value);
}
