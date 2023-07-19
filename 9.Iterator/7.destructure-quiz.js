// Quiz

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor(prop) {
  const {
    name,
    styles: { size, color },
  } = prop;
  console.log(color);
}

changeColor(prop);
