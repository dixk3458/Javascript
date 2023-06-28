// 배열의 추가 삭제 안좋은 예시
// 1. 배열의 인덱스로 직접 추가 삭제하는것은 좋지 않다.

const fruits = ['🍎', '🍌', '🍊', '🥝'];
console.log(fruits);

// 인덱스로 추가해도, 배열에 추가된것을 볼수있다.
// 하지만, 우리는 배열의 모든 위치를 파악할수없기에
// 추천하지 않는 방법이다.
fruits[4] = '🍓';
console.log(fruits);

// 만약 마지막 인덱스에 추가하고싶다면, 배열의 length값을 이용해라
fruits[fruits.length] = '🍇';
console.log(fruits);

// 2. delete 키워드를 이용한 삭제
delete fruits[2];
console.log(fruits);

// delete키워드를 이용해 삭제하게되면, 배열의 해당 인덱스가 값이 삭제 되지만,
// 비어있는 인덱스를 가지게되므로 추천하지 않는다.
