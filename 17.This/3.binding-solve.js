function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력:${this.name}`);
  };
  // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
  //   즉 앞으로 만들어질 인스턴스와 printName이라는 함수를 묶어 this.printName에 전달
  this.printName = this.printName.bind(this);
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

  //   2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억
  //   화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  printName = () => {
    console.log(`강아지의 이름을 출력:${this.name}`);
  };
}

//   대부분의 객체지향 프로그래밍 언어에서는
// 객체가 만들어지는 순간 this가 결정됨
// 변경X
const dog1 = new Dog('멍멍이');
dog1.printName();

console.clear();

// 자바스크립트가 아닌 다른 프로그래밍 언어에서는
// 고양이의 함수를 강아지에 할당했기 때문에
// 고양이가 나옴
// 하지만, 자바스크립트에서의 this는 누가 호출하냐에 따라
// this가 결정

// dog1.printName = cat1.printName;

dog1.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고 화려하게 출력!');
  //   여기서는 호출하는 사람이 없다.
  //   따라서 this.name = undefined이다
  printName();
}

printOnMonitor(tiger.printName);

// bind()로 묶은것
printOnMonitor(cat1.printName);

// 화살표함수를 사용한 binding
printOnMonitor(dog1.printName);
