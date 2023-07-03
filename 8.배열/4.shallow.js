// 얕은 복사: 객체는 메모리 주소 전달
// 자바스크립트에서 복사를 할때는 항상 얕은 복사가 이루어진다.

const apple = { name: '🍎', price: 1 };
const banana = { name: '🍌', price: 2 };

const store1 = [apple, banana];
console.log(store1);

const store2 = Array.from(store1);
console.log(store2);

store2.push({ name: '🍊', price: 3 });
console.log(store2);

// apple가리키는 주소에 가서 해당 객체의 price의 값을 바꾸었다.
apple.price = 4;

// 따라서 store1 배열 안에는 apple banana의 주소가 있는데, 해당 주소가 가리키는 값이 바뀌였기 때문에 변경된것을 볼수있다.
// 즉 객체는 메모리 주소가 전달된다.
console.log(store1);
console.log(store2);
