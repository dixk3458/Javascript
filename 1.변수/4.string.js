// 문자열 타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

string = '"안녕!"';
console.log(string);
string = "'안녕!'";
console.log(string);

// 특수 문자 출력하는법

string = '안녕!\n엘리야';
console.log(string);

string = '내 이름은 \t 정재웅이야';
console.log(string);

string = '\u09AC';
console.log(string);

// 템플릿 리터럴 (Templete Literal)
let id = '정재웅';
let greetings = "'안녕!," + id + '😘 \n즐거운 하루 보내요!';
console.log(greetings);

greetings = `'안녕! , ${id} ❤
즐거운 하루 보내요!'`;

console.log(greetings);
