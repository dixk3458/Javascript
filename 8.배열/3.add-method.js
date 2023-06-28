// 배열 메서드 포인트
// 배열 자체를 수정하는가? 새로운 배열을 리턴해주는가?

// 1. Array.isArray(오브젝트) : 오브젝트가 배열인지 아닌지 검사해준다.
const fruits = ['🍇', '🍓', '🥝'];
console.log(fruits);

// 배열이라면 true를 배열이 아니라면 false를 리턴해준다.
console.log(Array.isArray(fruits));
console.log(Array.isArray('배열아님'));

// 2. Array.includes() : 배열에 그 값을 포함하는지 검새해준다.

// 포함한다면 true 포함 하지않으면 false
console.log(fruits.includes('🍓'));
console.log(fruits.includes('🍉'));

// 3. Array.indexOf() : 인자로 전달한 그 값이 배열의 몇번 인덱스에 있는지 검사해준다.
// 있다면 해당 인덱스 값을 없다면 -1을 리턴한다.
console.log(fruits.indexOf('🥝'));
console.log(fruits.indexOf('🍉'));

// 배열의 추가

// 앞

// unshift()는 배열 자체를 변경해준다. 배열의 앞에 오렌지를 추가한것을 볼수있다.
// 그리고 unshift() 추가하고난 후 배열의 길이를 리턴해준다.
let length = fruits.unshift('🍊');
console.log(fruits);
console.log(length);

// 뒤
// push()는 배열 자체를 변경하고 배열의 뒤에 인자로 전달한 값을 추가해준다.
// 그리고 push()는 추가하고 난 후 배열의 길이을 리턴해준다.

length = fruits.push('🍑', '🍒'); // 여러개 추가할수있다.
console.log(fruits);
console.log(length);

// 배열의 삭제

// 앞

// shift()는 배열 자체를 변경하고 삭제된 아이템을 리턴해준다.
let deletedItem = fruits.shift();
console.log(fruits);
console.log(deletedItem);

// 뒤

// pop()은 배열 자체를 변경하고 삭제된 아이템을 리턴해준다.
deletedItem = fruits.pop();
console.log(fruits);
console.log(deletedItem);

// Array.splice(시작 인덱스,삭제할 아이템 개수,추가할 아이템) 배열 중간에서 추가 및 삭제
// 기존 배열을 변경해주고, 삭제된 아이템 배열을 반환한다.
deletedItem = fruits.splice(1, 2, '🍏');
console.log(fruits);
console.log(deletedItem);

let array = [1, 2, 3, 4, 5, 6];
console.log(array);

// 4. Array.fill(값,시작인덱스,끝 인덱스) : 배열의 값을 특정한 값으로 채워준다.
// 배열 자체를 변경해주고, 배열 자체를 반환한다.
array.fill('0', 1, 3);
console.log(array);

// 새로운 배열을 리턴하는 함수들
array = [1, 2, 3, 4, 5, 6];

// 5. Array.slice(시작인덱스,끝인덱스) : 기존 배열에서 해당하는 인덱스 만큼 잘라 새로운 배열을 만들어 반환한다.
let newArray = array.slice(3);
console.log(array);
console.log(newArray);

// 6. Array.concat(또 다른 배열) : 기존 배열과 다른 배열을 합쳐 새로운 배열을 리턴해준다.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6, 7];
let array3 = array1.concat(array2);
console.log(array3);

// 7. Array.reverse() : 인자로 전달된 배열의 인덱스를 거꾸로해 새로운 배열을 리턴해준다.
console.log(array.reverse());

// 8. Array.flat() : 여러개로 중첩된 배열을 해당 단계로 벗겨 새로운 배열로 반환한다.
array = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
console.log(array);

// 아래와 같이 인자로 아무것도 전달 하지 않았기 때문에 한단계만 벗겨짐
console.log(array.flat());

// 인자 전달
console.log(array.flat(2));

