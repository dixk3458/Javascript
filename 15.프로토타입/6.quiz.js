class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }
  play() {
    console.log('같이 놀아용!');
  }
}

class Tiger extends Animal {
  //   constructor(name, emoji) {
  //     super(name, emoji);
  //   }

  //   constructor(...args) {
  //     super(...args);
  //   }

  //   서브 클래스에서는 자동으로 constructor(){} super()가 자동으로 정의
  //   따라서 클래스의 프로퍼티가 같다면 아래와 같이 생략 해줘도 가능

  hunt() {
    console.log('사냥하자!! 🐷');
  }
}

const dog1 = new Dog('멍멍이', '🐕', '정재웅');

const tiger1 = new Tiger('어흥이', '🐯');

console.log(dog1);
dog1.play();
dog1.printName();

console.log(tiger1);
tiger1.printName();
tiger1.hunt();

console.log(tiger1 instanceof Tiger);
console.log(dog1 instanceof Tiger);
