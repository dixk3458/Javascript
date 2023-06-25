// Boolean
const isTrue = new Boolean(true);
console.log(isTrue);

// 위 처럼 래퍼 클래스를 사용해 변수를 안만드는 이유는
// 원시타입이 아닌 래퍼 객체이기때문에 원시타입보다 메모리 차지를 많이한다.
// 따라서 필요할때 .을 찍어 변환해준다.

console.log(isTrue.valueOf());

/**
 * Falshy
 * 0
 * -0
 * ''
 * null
 * undefined
 * NaN
 *
 */

/**
 * Truthy
 * 1
 * -1
 * '123'
 * 'false'
 * Infinity
 * []
 * {}
 */
