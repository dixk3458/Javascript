// 조건문 Conditional Statement
// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우 유용하다.

let day = 6; //0: 월요일 , 1:화요일 ... 6:일요일
let dayName;

switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
}

console.log(dayName);

let condition = '그저그럼'; //okay,good => 좋음!, bad => 나쁨!

switch (condition) {
  case 'okay':
  case 'good':
    console.log('좋음');
    break;
  case 'bad':
    console.log('나쁨');
    break;
  default:
    console.log('해당하는 기분 없음');
}
