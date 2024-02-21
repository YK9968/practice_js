let renderImg;
// RENDER_IMG
// const listEl = document.querySelector('.list');

// const KEY_API = '42471453-a4a004408e33f852748a0909e';
// const BASE_URI = 'https://pixabay.com/api/';
// const dog = 'dog+fun';
// const link = `${BASE_URI}?key=${KEY_API}&q=${dog}`;

// function getImg() {
//   return fetch(link)
//     .then(respon => {
//       if (!respon.ok) {
//         throw new Error(`Img error ${respon.status}`);
//       }
//       return respon.json();
//     })
//     .catch(error => {
//       alert('bad img');
//     });
// }
// getImg().then(data => {
//   const masImg = data.hits
//     .slice(0, 3)
//     .map(({ webformatURL, tags }) => {
//       return `
//       <img
//         src="${webformatURL}"
//         alt="${tags}"
//       />
//   `;
//     })
//     .join('');
//   console.log(masImg);
//   listEl.innerHTML = masImg;
// });

// ------------------------------------------------------------------------------------

let newInfoUsers;
// CREATE USERS

// const buttonSearchUsers = document.querySelector('.btn');
// const userListEl = document.querySelector('.user-list');
// const paramsSearch = new URLSearchParams({ _limit: 5, _sort: 'name' });

// buttonSearchUsers.addEventListener('click', handleSearchUsers);

// function handleSearchUsers() {
//   fetch(`https://jsonplaceholder.typicode.com/users?${paramsSearch}`)
//     .then(responce => {
//       if (!responce.ok) {
//         throw new Error(`You have problem with status${responce.status}`);
//       }
//       return responce.json();
//     })
//     .then(users => {
//       const markup = users
//         .map(({ name, email, company }) => {
//           return `<li>
//             <p><b>Name:</b> ${name}</p>
//             <p><b>Email:</b> ${email}</p>
//             <p><b>Company:</b> ${company.name}</p>
//             <p>__________________________________</p>
//           </li>`;
//         })
//         .join('');
//       userListEl.innerHTML = markup;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
let crud;
