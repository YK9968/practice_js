const bakendData = {
  server: 'aws',
  port: 2000,
  status: 'working',
};

const p = new Promise(function (resolve, reject) {
  const isTrue = true;
  setTimeout(() => {
    if (isTrue) {
      resolve(bakendData);
    } else {
      reject('You have a problem');
    }
  }, 2000);
})
  .then(data => {
    console.log(data);
  })

  .catch(error => {
    console.log(error);
  });
