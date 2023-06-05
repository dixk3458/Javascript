/**
 * 인스턴스 레벨의 property와 method
 *
 * 클래스 레벨의 property, method를 생성해서 재사용성을 높여보자!
 * 클래스 레벨로 만들기 위해서는 static keyword를 사용하면된다.
 * 즉 클래스에서 딱 한번만 만들면, 재사용가능하다.
 * 사용할때에는 클래스로 접근을 해야한다.
 *
 */

class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  // Tip : 클래스 레벨의 프로퍼티와 메서드는
  // 모든 클래스에서 공통적으로 사용하고,
  // 만들어진 인스턴스의 데이터에 접근할 필요가 없을때 사용한다.

  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할수없다.
    return new Fruit('banana', '🍌');
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana);

console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', '🍎');
apple.display();
