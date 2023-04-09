// 원시타입은 값이 복사되어 전달됨

let a = 1;
let b = a; // 1

b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리 주소,레퍼런스)가 복사되어 전달됨
let apple = {
  name: '사과',
};

let orange = apple; // apple의 주소가 복사됨

orange.name = '오렌지';
console.log(apple);
console.log(orange);

// 즉 동일한 주소를 가리키기 때문에 한번에 변경됨

