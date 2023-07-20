// Map은 Object와 구조적으로 비슷하지만, 사용할수있는 메서드에 있어서 차이가 있다.

// Map은 순서가 없고 중복된 key를 가질수없다.
// 즉 key만 다르면, 중복된 값을 가질수있다.
// Map 사용법
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🥝'],
]);

console.log(map);

// Map은 Set과 마찬가지로 다양한 메서드를 사용할수있다.
// obj와 차이점은 사용할수있는 메서드에 차이가 있고,
// obj는 key를 이용해 바로 value에 접근할수있지만,
// map은 key를 이용해 바로 접근을 할수없고
// map.get(key)를 이용해야한다.