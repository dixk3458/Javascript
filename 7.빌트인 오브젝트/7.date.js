const date = new Date();
console.log(date);

// Date.setFullYear(연도) : 연도를 바꿔준다.
date.setFullYear(2024);
console.log(date);
date.setFullYear(2023);

// Date.setMonth(월) : 월 을 바꿔준다. 0이 1월을 가리킨다.
date.setMonth(0);
console.log(date);

// Date.toLocaleString(국가 코드) : 원하는 형식으로 날짜를 표현해준다.
console.log(date.toLocaleString('ko-KR'));

