'use strict';
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

// 엄격 모드에서는 키워드를 삭제하는것이 안되다.

// var x = 1;
// delete x;

// 엄격모드에서는 키워드없이 선언(var 선언)하는거 안된다.
function add(x) {
  var a = 2;
  var b = a + x;
  console.log(this);
}

add();

const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}
