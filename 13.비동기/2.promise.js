function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작습니다.'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(3)
  .then(() => {
    console.log('콜백');
  })
  .catch(console.error)
  .finally(() => {
    console.log('끝났다.');
  });
