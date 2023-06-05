// 접근제어자 - 캡슐화(내부에 있는 데이터를 외부상에 보이지 않도록해준다.)
// private(#) , public(기본), protected

class Fruit {
  // 클래스가 만들어질때 초기화 시킬수 있다.
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }
}

const apple = new Fruit('apple', '🍎');
console.log(apple);

// apple.display();

//apple.#name = '오렌지'; // #filed는 외부에서 접근이 불가능함
