const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 1000);
});

Promise.race([p1, p2])
  .then(value => console.log(value))
  .catch(error => console.log(error)); // 2
