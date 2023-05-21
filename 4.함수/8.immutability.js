// Immutability 불변성
// 불변성을 유지하면서 코딩하는것을 추천한다.

function display(num) {
  // 만약 인자로 전달받은 num을 함수 내부에서 변경하면 ?
  num = 8;
  // 변경된 8이 출력된다.
  console.log(num);
}

const value = 4;
display(value);
// 값을 전달해주기때문에,value는 그대로이다.
console.log(value);

// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 🤮
// 상태변경이 필요한 경우에는 , 새로운 상태를(오브젝트,값) 만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리주소)

function displayObject(obj) {
  obj.name = 'changedName'; // ❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경하지 말자!
  console.log(obj);
}

const jaewoong = { name: 'jaewoong' };

// 함수를 호출하게 되면, 변수 jaewoong에 저장되어있는 참조값이 인자로 전달된다.
// 참조값을 전달받은 displayObject에서 객체가 실제로 저장되어있는 힙에 있는 코드블럭에 가서 name에 접근한뒤
// 이름을 변경한다.
// 따라서 jaewoong의 참조값이 가리키는 코드블럭 내부에서 변경이 되었기때문에, jaewoong을 출력했을때 변경된 값을 볼수있다.
displayObject(jaewoong);
console.log(jaewoong);

function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'Bob' }; // 반환할때는 새로운 오브젝트 만들기!
}

console.log(changeName(jaewoong));

console.log(jaewoong);
