const options = {
  method: 'GET',
};

fetch('https://jsonplaceholder.typicode.com/users', {
  headers: {
    Accept: 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
