// callback과 second를 인자로 받아 second 후에 callback을 수행하는 함수 runInDelay()를 만들자
// 단 second가 0보다 작다면, 에러를 던지자!

function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback은 반드시 포함되어야합니다.');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 작을수 없습니다.');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('콜백');
  }, -1);
} catch (error) {
  console.log(error);
}
