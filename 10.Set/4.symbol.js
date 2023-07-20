// Symbol은 유일한 키를 만들때 사용한다.
const map = new Map();

const key1 = 'key';
const key2 = 'key';

map.set(key1, 'Hello');
console.log(map);
console.log(map.get(key2));

// 원시 타입 데이터는 변수의 이름은 다를지라도 , 같은 데이터를 가지고 있다면, 같다.
// 즉 같은 키이다.
console.log(key1 === key2);

const symbolKey1 = Symbol('key');
const symbolKey2 = Symbol('key');

// 즉 이름은 똑같지만, 서로 다른 유일한 키를 만들어준다.
map.set(symbolKey1, 'Hello2');
console.log(map.get(symbolKey2));

// 만약 동일한 이름으로 동일한 키를 사용하고 싶다면, Symbol.for()를 이용하자
// 전역 심볼 레지스트리에서 관리해준다.
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');

console.log(k1 === k2);

// Symbol.keyFor(Symbol) 전역 심볼 레지스트리에서 해당 심볼이 가진 key를 리턴해준다.
console.log(Symbol.keyFor(k1));

// 보안성을 높일때 사용한다.

const obj = { [k1]: 'Hello', [Symbol('key')]: 'Hello' };
console.log(obj);

console.log(obj[k1]);
console.log(obj[Symbol('key')]);
