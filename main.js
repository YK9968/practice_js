// import axios from 'axios';

// const clickBtn = document.querySelector('.btn');
// const usersList = document.querySelector('.users-list');

// const fetchUsers = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
//     params: {
//       _limit: 5,
//     },
//   });
//   return response.data;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     const markup = users
//       .map(({ id, username, website, email }) => {
//         return `<li><p>Id: ${id}</p></li>
//       <li><p>User Name: ${username}</p></li>
//       <li><p>Website: ${website}</p></li>
//       <li><p>Email: ${email}</p></li>`;
//       })
//       .join('');
//     usersList.innerHTML = markup;
//   } catch (error) {
//     console.log(error);
//   }
// };

// clickBtn.addEventListener('click', doStuff);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('.create');
const btnDestroy = document.querySelector('.destroy');
const inputEl = document.querySelector('.input-number');

const addBox = amount => {
  console.log(amount);
};

const saveValueInput = () => {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    addBox(inputEl.value);
  }
  alert('incorect number, try again. Must be 1 - 100');
};

btnCreate.addEventListener('click', saveValueInput);

const destoyBlock = () => {
  divEl.innerHTML = '';
};
btnDestroy.addEventListener('click', destoyBlock);
