function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  const result_1 = await fryEgg(egg);
  console.log(result_1);
  return result_1;
}

makeFriedEgg().then(result => console.log(result));
