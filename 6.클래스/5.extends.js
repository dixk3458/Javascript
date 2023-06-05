// 클래스 상속
// 클래스가 공통된 구조를 가질때 코드 중복을 해결해준다.
// 상위 클래스에서 정의한 것을 물려받아 자식 클래스가 입맛에 맞게 사용한다.

class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log('먹는다!');
  }

  sleep() {
    console.log('잔다!');
  }
}

// 호랑이는 동물의 하위 클래스이다.
class Tiger extends Animal {}

const tiger = new Tiger('yellow');
// 출력 결과 동물 클래스로부터 상속받은 color,eat,sleep을 가지고있다.
console.log(tiger);

class Dog extends Animal {
  play = () => {
    console.log('강아지는 논다!');
  };
}

const dog = new Dog('white');
// 출력 결과 강아지는 동물 클래스의 프로퍼티,메서드 그리고 자기의 고유 메서드도 가지고있다.
console.log(dog);

// 만약 하위 클래스에서 추가 프로퍼티를 가진다면, 이렇게 정의해주자!
class Monkey extends Animal {
  constructor(color, ownerName) {
    // 상위 클래스 Animal에서 정의한 color로 전달
    super(color);
    // 원숭이 고유의 프로퍼티 만듬
    this.ownerName = ownerName;
  }

  // 상위 클래스와는 다르게 행동 할 경우 오버라이딩해주자!

  eat = () => {
    console.log('원숭이는 빠르게 먹는다!');
  };

  // 또는 상위 클래스에서 정의한 함수에서 추가로 행동할 경우
  sleep() {
    super.sleep();
    console.log('원숭이가 잔다');
  }
}

const monkey = new Monkey('brown', '정재웅');
console.log(monkey);
monkey.eat();
monkey.sleep();
