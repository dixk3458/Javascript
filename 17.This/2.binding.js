// this 바인딩
// java, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉 this는 호출하는 사람 (caller)에 의해 동적으로 결정됨!

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력:${this.name}`);
  };
}

const cat1 = new Cat('냐옹이');
cat1.printName();

function Tiger(name) {
  this.name = name;
  this.printName = function () {
    console.log(`호랑이의 이름을 출력:${this.name}`);
  };
}

const tiger = new Tiger('어흥이');

class Dog {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`강아지의 이름을 출력:${this.name}`);
  }
}

const dog1 = new Dog('멍멍이');
dog1.printName();

console.clear();

// 자바스크립트가 아닌 다른 프로그래밍 언어에서는
// 고양이의 함수를 강아지에 할당했기 때문에
// 고양이가 나옴
// 하지만, 자바스크립트에서의 this는 누가 호출하냐에 따라
// this가 결정
dog1.printName = cat1.printName;

dog1.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고 화려하게 출력!');
  //   여기서는 호출하는 사람이 없다.
  //   따라서 this.name = undefined이다
  printName();
}

printOnMonitor(tiger.printName);
