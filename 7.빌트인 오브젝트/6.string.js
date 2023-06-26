// String

const text = 'text';
const textObj = new String('textObj');
console.log(text);
console.log(textObj);

// 유용한 문자열 함수들

// String.trim() : 문자열 양 끝의 공백을 제거하여 새로운 문자열 반환
const space = '              space  space    ';
console.log(space.trim());

// String.toUpperCase() : 문자열을 모두 대문자로 표기하여 새로운 문자열 반환
const upper = text.toUpperCase();
console.log(upper);

// String.toLowerCase() : 문자열을 소문자로 표기
const lower = text.toLowerCase();
console.log(lower);

// String.split('기준',덩어리 개수:선택) : 문자열을 기준에 맞게 분리해준다.

const longText = '안녕하세요 저는 정재웅입니다. 만나서 반갑습니다.';
console.log(longText.split(' '));

// String.substring(시작인덱스,끝 인덱스:포함X) : 기준에 맞게 부분적인 문자열을 반환한다.
console.log(longText.substring(-2, 4));

// String.slice() : 기준에 맞게 잘라서 문자열을 반환한다.
console.log(longText.slice(0, -2));

/**
 * String.substring() vs String.slice()
 * 1. start 값이 end값보다 크다면,
 * String.substring()은 두 인덱스 값을 교환해 정상적으로 동작하고
 * String.slice()는 빈 문자열을 반환한다.
 *
 * 2. substring의 start에 음수가 들어가면, 0으로 교체해 작동하고
 *      slice의 end에 음수가 들어가면, 문자열의 뒤에서 잘라준다.
 *
 */

// String.indexOf(문자) : 문자의 해당 인덱스 값을 반환해준다.
console.log(text.indexOf('e'));

// String.charAt(인덱스값) : 문자열의 해당 인덱스 값에 있는 문자를 반환
console.log(text.charAt(3));


// 그 외의 함수들
// String.startsWith('시작 문자열')
// String.endsWith('끝 문자열')
// String.includes('문자')
