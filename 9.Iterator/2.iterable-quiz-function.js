function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      const max = maxValue;
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > max };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, n => n * 2);

for (const item of multiple) {
  console.log(item);
}
