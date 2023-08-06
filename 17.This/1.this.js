// javascript에서 this는 문맥에 따라서 달라진다.

/**
 * 글로벌 컨텍스트의 this
 * - 브라우저: 윈도우
 * - 노드: 모듈
 */

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout();
// setTimeout();

console.clear();
/**
 * 함수 내부에서의 this
 * 엄격모드에서는 함수 스코프내에 this가 정해지지 않았기때문에,
 * undefined이다.
 * 평소에는 global 객체
 */

function print() {
  console.log(this);
}

print();

/**
 * 생성자 함수 또는 클래서에서의 this
 * 앞으로 생성될 인스턴스 자체를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
    console.log(this);
  };
}

const cat1 = new Cat('냐옹이');
cat1.printName();

class Dog {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
    console.log(this);
  }
}

const dog1 = new Dog('멍멍이');
dog1.printName();
