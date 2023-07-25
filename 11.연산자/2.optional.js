// Optional chaining
// null, undefined를 확인할때 더욱 간단하게 확인할수있다.

const jaewoong = {
  name: '정재웅',
  age: 25,
  school: {
    name: '전주대학교',
    major: '컴퓨터공학과',
  },
};

function printMajor(obj) {
  //   const major = obj && obj.school && obj.school.major; // undefined 출력
  //   const major = obj.school.major; // 에러 obj가 없기때문에
  const major = obj?.school?.major;

  console.log(major);
}

printMajor();
