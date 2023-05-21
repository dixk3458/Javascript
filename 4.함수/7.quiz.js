// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// ex) 5, 순회하는 숫자를 다 출력하고 싶음
// ex) 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max,action){code}

// 함수를 작성할때 호출은 어떻게 하면 좋을까 생각먼저 해보자.

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

const print = num => {
  console.log(num);
};

const doubleAndLog = num => {
  console.log(num * 2);
};

iterate(5, print);
iterate(5, doubleAndLog);

iterate(3, num => {
  console.log(num);
});

setTimeout(() => {
  console.log('1초뒤 이 함수가 실행될거에요!');
}, 1000);
