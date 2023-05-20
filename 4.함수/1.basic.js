function add(num1, num2) {
    const result = num1 + num2;
    console.log('function');
    return result;
  }
  
  const result = add(1, 2);
  console.log(result);
  
  // 사용예제2
  
  function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName} ❤`);
    return `${firstName} ${lastName}`;
  }
  
  fullName('정', '재');
  
