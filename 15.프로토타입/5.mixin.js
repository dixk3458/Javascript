// 대부분의 언어에서 다중상속을 지원하지 않는다.
// 오브젝트는 단 하나의 prototype을 가리킬 수 있다. (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶다?
// => Mixin

const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog1 = new Dog('멍멍이');
dog1.play();
dog1.sleep();

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} 먹는다`);
  }
}

// 자바스크립트의 클래스는 내부적으로 프로토타입으로 이루어지기 때문에
// 프로토타입을 베이스로 사용할수있다.

class Tiger extends Animal {
  constructor(name, emoji) {
    super(name);
    this.emoji = emoji;
  }
}

Object.assign(Tiger.prototype, play, sleep);

const tiger = new Tiger('어흥이', '🐯');
console.log(tiger);
tiger.eat();
tiger.play();

// Object.assign()을 통해 다중상속문제를 해결할수있다.