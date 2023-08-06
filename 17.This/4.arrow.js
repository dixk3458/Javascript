// 자바스크립트의 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용(클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고있는 객체) 생성됨

const dog = {
  name: '멍멍이',
  play: function () {
    // 💩
    console.log('놀자!!');
  },
};

dog.play();

const obj = new dog.play(); //💩
console.log(obj);

// ES6
const cat = {
  name: '냐옹이',

  // 객체의 메서드 (오브젝트에 속한 함수)
  play() {
    console.log('냐옹');
  },
};

cat.play();
// const obj2 = new cat.play(); // 생성자 함수로 사용 ❌

/**
 * 화살표 함수 특징
 * 1. 문법이 깔끔하다
 * 2. 생성자 함수로 사용이 불가능(무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments 라는 객체가 없다
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 *
 *
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2);

const print = name => {
  //즉 화살표 함수 안에서 arguments란
  // 새로 arrow 함수가 만든 새로운 arguments 객체가 아니라
  // arrow함수 외부의 arguments를 참조
  console.log(arguments); //
};

print();

// 화살표 함수에서의 this는 정적으로 바인딩됨
// 함수가 정의될때 렉시컬환경에 this에 대한 정보가 저장
// 함수에서 제일 근접한 스코프의 this에 정적으로 바인딩
const printArrow = () => {
  console.log(this);
};

printArrow();
