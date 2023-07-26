function a() {
  throw new Error('에러발생');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니 이 에러를 여기에서 처리할수없겟어.');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done');
