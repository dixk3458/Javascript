{
  const x = 1;

  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  //   블럭 밖에서는 변수를 참조할수없다.
  //   console.log(y);
}

const text = 'global'; // 전역 변수, 전역 스코프(글로벌 변수,글로벌 스코프)
{
  const text = 'inside block1'; // 지역 변수(로컬변수),지역 스코프(로컬 스코프)
  {
    // 내부에서 외부에 접근할때, 가장 인접한 것을 참조한다.
    console.log(text);
  }
}
