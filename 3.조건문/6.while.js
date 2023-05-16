// while(조건){}
// 조건이 false가 될때 가지 코드를 반복실행한다.

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직 살아있다.');
  if (i === 1000) {
    break;
  }
  i++;
}

console.clear();

do {
  console.log('일단 한번');
} while (isActive);

