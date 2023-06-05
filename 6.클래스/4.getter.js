/**
 * 접근자 프로퍼티 (실제로는 함수이다.)
 *
 * 특정한 일을 수행하는 메서드는 아닌데, 무언가를 조합해야할경우 사용한다.
 * 또는 get,set을 할때 특정한 일을 해주고 싶을경우
 * ex) 10이상이 할당되면, 다시 0으로 초기화 해주는일
 *
 * 함수앞에 get,set 키워드를 붙이면 된다.
 *
 * get은 접근할때 함수 호출
 * set은 할당할때 함수 호출
 *
 */

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // 아래와 같이 property로 할당을 해주면, 객체 생성이후 프로퍼티의 값을 변경했을때 모순이 생긴다.
    // this.fullName = firstName + LastName;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const jaewoong = new Student('정', '재웅');
console.log(jaewoong.fullName);

jaewoong.fullName = 'daniel';
