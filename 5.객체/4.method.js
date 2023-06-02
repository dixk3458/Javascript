// 객체는 관련있는 데이터와 행동을 묶어서 관리한다.

// 객체 안에서 자기 자신의 key에 접근하기위해선 this를 사용한다.
const apple = {
  name: '사과',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();
