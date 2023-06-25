// 글로벌 객체
// globalThis
// 전역에서 사용할수있는 객체
// 다양한 함수가있다.
/**
 * parseInt, parseFloat
 * Infinity, isFinity
 * encodeURI(), decodeURI()
 *
 */

// 문자열 안에 포함된 내용을 해당하는 데이터로 변환해준다.
console.log(parseFloat('123.4'));
console.log(parseInt('123.4'));

// URL (URI, Uniform Resource Identifier의 하위 개념이다)
// 즉 URI는 특정 리소스를 식별하는 통합 자원 식별자를 말하고
// URL은 특정 리소스의 위치를 가리키는 주소를 말한다.
// URL은 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리해야 한다.

const url = 'https://드림코딩.com';
const encoded = encodeURI(url);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component를 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));

console.log(decodeURI());
