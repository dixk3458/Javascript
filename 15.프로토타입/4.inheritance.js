// 프로토타입을 베이스로한 객체지향 프로그래밍

// 생성자 함수를 이용한 템플릿
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  //   super(name,emoji)
  //   Animal(부모)야 너꺼 생성자 함수를 호출해주는데,
  //   this는 내껄로 사용해주라.
  Animal.call(this, name, emoji);
  this.owner = owner;
}

// Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = function () {
  console.log('같이 놀아용!');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = function () {
  console.log('사냥하자!! 🐷');
};

const dog1 = new Dog('멍멍이', '🐕', '정재웅');

const tiger1 = new Tiger('어흥이', '🐯');

console.log(dog1);
dog1.play();
dog1.printName();

console.log(tiger1);
tiger1.printName();
tiger1.hunt();
