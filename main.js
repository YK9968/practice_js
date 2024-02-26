import axios from 'axios';

const clickBtn = document.querySelector('.btn');
const usersList = document.querySelector('.users-list');

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
    params: {
      _limit: 5,
    },
  });
  return response.data;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers();
    const markup = users
      .map(({ id, username, website, email }) => {
        return `<li><p>Id: ${id}</p></li>
      <li><p>User Name: ${username}</p></li>
      <li><p>Website: ${website}</p></li>
      <li><p>Email: ${email}</p></li>`;
      })
      .join('');
    usersList.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
};

clickBtn.addEventListener('click', doStuff);
