// 생성자 함수
// 템플릿을 만들어 , 비슷한 형태의 객체를 손쉽게 만들어준다.
// 생성자 함수의 첫 문자는 대문자 시작이다.

// 밑에와 같이 작성하면, 여러번 해야한다.
// const apple = {
//   name: '사과',
//   emoji: '🍎',
//   display: function () {
//     console.log(`${this.name}: ${this.emoji}`);
//   },
// };

// const orange = {
//   name: '오렌지',
//   emoji: '🍊',
//   display: function () {
//     console.log(`${this.name}: ${this.emoji}`);
//   },
// };

// apple.display();
// orange.display();

function Fruit(name, emoji) {
  // this.XX 하는 순간 , 객체의 XX라는 속성이 만들어진다.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${name}: ${emoji}`);
  };

  //   이렇게 해도 되지만, 화살표함수도 가능하다.
  //   this.display = function () {
  //     console.log(`${this.name}: ${emoji}`);
  //   };
}

const apple = new Fruit('apple', '🍎');
apple.display();
console.log(apple);
