const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = false;

    if (isSuccess) {
      onSuccess('success value');
    } else {
      onError('error');
    }
  }, 2000);
};

fetchUserFromServer(
  'Mango',
  user => console.log(user),
  error => console.error(error)
);
