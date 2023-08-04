const dog1 = { name: '뭉치', emoji: '🐶' };
const dog2 = { name: '코코', emoji: '🐕' };

// 생성자 함수

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  //   인스턴스 레벨의 함수
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}

// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog3 = new Dog('멍멍이', '🐕');
const dog4 = new Dog('땡땡이', '🐕');

console.log(dog3);
console.log(dog4);

dog3.printName();
dog4.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 프로토타입 레벨의 함수를 오버라이딩(재정의)하면
// 프로토타입 레벨의 함수는 가려짐

dog3.printName = function () {
  console.log('안녕');
};

dog3.printName();

// 정적 레벨
Dog.hello = () => {
  console.log('Hello');
};

// dog3.hello();

Dog.hello();
