const jaewoong = {
  name: '정재웅',
  age: 25,
  job: 'Front-end engineer',
};

// 객체의 프로퍼티에 대한 세부정보를 알수있다.
const desc = Object.getOwnPropertyDescriptors(jaewoong);
console.log(desc);

// 객체의 프로퍼티에 대한 세부정보 (descriptor)를 정의 할수있다.

Object.defineProperties(jaewoong, {
  name: {
    writable: false,
  },
  age: {
    value: 35,
  },
});

console.log(jaewoong);
jaewoong.name = 'daniel';
console.log(jaewoong);
