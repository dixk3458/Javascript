// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 방법)
// 2. 클래스

// 생성자 함수 예시
// function Fruit(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name}: ${this.emoji}`);
//   };
// }

// const apple = new Fruit('사과', '🍎');
// apple.display();

// 클래스 변환

class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수이다.
  // 객체를 만드는데 필요한 데이터를 인자로 받아올수있다.
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 멤버함수는 생성자 밖에서 정의해주는게 일반적이다.
  // 정의할때 function 키워드 X

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
apple.display();
console.log(apple);

// 용어 정리
// apple은 Fruit 클래스의 인스턴스이다.
// Fruit = Class
// apple = instance

// obj는 그냥 객체이다.
const obj = { name: 'jaewoong' };
