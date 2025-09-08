const randomNumber = max => {
  return Math.floor(Math.random() * max);
};

export default () => `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;