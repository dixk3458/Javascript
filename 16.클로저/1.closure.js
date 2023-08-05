// 실행 컨텍스트 스택에 전역 스코프 렉시컬 환경 추가
// 렉시컬 환경의 환경 레코드에 global
// 외부 렉시컬 환경 참조X (전역 스코프이기때문에)
const global = 'global';

// 실행 컨텍스트 스택에는 아직 호출되지 않았기때문에 없지만,
// 전역 스코프 렉시컬 환경을 참조하는 outer 스코프 렉시컬 환경 생성
function outer() {
  // 환경 레코드에 추가
  const outer = 'outer';

  //   마찬가지로 outer 스코프 렉시컬 환경을 참조하는 inner 스코프 렉시컬 환경 생성
  function inner() {
    // inner 스코프 렉시컬 환경의 환경 변수에서 먼저 찾아
    // 근데 없네?
    // 부모인 outer에서 발견
    console.log(`${outer}`);
  }

  //   inner반환 즉 inner의 참조값
  return inner;
}

// outer스코프 렉시컬환경 실행 컨텍스트 스택에 추가
// 종료하고 실행 컨텍스트에서만 outer 삭제
// 왜냐 아직 outer 렉시컬 환경 스코프를 참조하는 inner가 있기때문에
const inner2 = outer();

// 따라서 inner스코프를 가리키는 inner2호출
inner2();
