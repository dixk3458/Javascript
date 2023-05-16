// 반복문 Loop Statement
// for(변수 선언문; 조건식;증감식){}
// 실행순서:
// 1. 변수 선언문
// 2. 조건식 값이 참이면 코드블럭 수행
// 3. 증감식 수행
// 4. 조건식이 거짓이 될때까지 2번과 3번을 반복한다.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.clear();
// 무한루프를 조심하자!
// for (;;) {}

for (i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
    console.log('드디어 i가 10이되었다.');
    break;
  }
  console.log(i);
}
