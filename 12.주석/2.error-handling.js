// 에러 처리

function readFile(path) {
  //   throw new Error('파일을 읽을수 없습니다.');
  return '파일의 내용';
}

function processFile(path) {
  let content;
  try {
    content = readFile();
  } catch (error) {
    console.log(error);
    content = '기본 내용';
  } finally {
    console.log('성공하든 실패하든 실행됨');
  }
  const result = 'hi ' + content;
  return result;
}

const result = processFile('경로');
console.log(result);
