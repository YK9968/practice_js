const isThatTrue = false;

const promise = new Promise(onResolve => {
  setTimeout(() => {
    onResolve(5);
  }, 2000);
});

console.log(promise);

promise
  .then(value => {
    console.log(value);
    return value * 10;
  })
  .then(value => {
    console.log(value);
    return value / 2;
  })
  .then(value => {
    console.log(value);
    return value + 5;
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => console.log(error))
  .finally(() => {
    console.log('Mayby I understand');
  });
