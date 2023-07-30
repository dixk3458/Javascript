function getBanana() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('에러'));
}

getBanana().then(banana => {
  getApple()
    .then(apple => {
      return [banana, apple];
    })
    .then(result => {
      console.log(result);
    });
});

Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then(result => console.log('all', result))
  .catch(error => console.log(error));

Promise.race([getBanana(), getApple()]).then(result => {
  console.log('race', result);
});
