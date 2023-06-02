// 객체
// 객체를 만드는 법 3가지

// 객체는 연관있는 속성 데이터 행동을 묶어서 관리하는데 유용하다.
// 1. const name = {key:value};
// 2. const name = new Object();
// 3. const name = Object.create();

// key에는 문자, 문자열,숫자 등 이 들어갈수있다.
// value에는 원시타입,객체타입(함수포함)도 들어갈수있다.

const jaewoong = {
  name: '정재웅',
  sleep: function sleep() {
    console.log('잠자기');
  },
  family: {
    father: '정정만',
    mother: '이승희',
  },
  ['hello']: '안녕',
  ['hello-bye']: '안녕-잘가',
};

console.log(jaewoong.name);

console.log(jaewoong.hello);
// 특수문자를 사용한 key값은 반드시 대괄호 안에서 문자열로 작성되어야한다.
// 그리고 접근할때 . 으로 접근은 못하고, 대괄호 표기법으로 접근가능
console.log(jaewoong['hello-bye']);
