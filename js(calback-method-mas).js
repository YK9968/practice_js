'use strict';

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const username = prompt('Enter your name');
//   if (!username) {
//    return
//  }

//   callback(username);
// }

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// letMeSeeYourName(greet)

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//   const buy = {
//     productName: name,
//     productPrice: price,
//     productId: Math.random(),
//   };
//   showProduct(buy);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct('apple', 10, showProduct);

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
// ];

// ОТРИМАТИ МАСИВ ІМЕН КОРИСТУВАЧІВ ЗА СТАТТЮ (ПОЛЕ GENDER)

// ========================================== METHOD REDUCE ================================

// const gender = 'male';
// const getGenderName = users.reduce((acc, user) => {
//   if (user.gender === gender) {
//     acc.push(user.name);
//   }
//   return acc;
// }, []);

// console.log(getGenderName);

// ========================================== METHOD FILTER AND MAP =========================
// const gender = 'male';
// const getGenderName = users
//   .filter(user => user.gender === gender)
//   .map(user => user.name);

// console.log(getGender);
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// ОТРИМАТИ МАСИВ ОБ'ЄКТІВ КОРИСТУВАЧІВ ЗА КОЛЬОРОМ ОЧЕЙ (ПОЛЕ EYECOLOR).

// ========================================== METHOD REDUCE ================================

// const colorEaes = 'blue';

// const getUsers = users.reduce((acc, user) => {
//   if (user.eyeColor === colorEaes) {
//     acc.push(user);
//   }
//   return acc;
// }, []);

// console.log(getUsers);

// ========================================== METHOD FILTER  =========================
// const colorEaes = 'blue';

// const getUsers = users.filter(user => user.eyeColor === colorEaes);

// console.log(getUsers);
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// ========================================== METHOD REDUCE ================================

// Отримати масив тільки неактивних користувачів (поле є активним).

// const getNotUserActive = users.reduce((acc, user) => {
//   if (user.isActive === false) {
//     acc.push(user.name)
//   }
//   return acc
// }, []);

// console.log(getNotUserActive);

// ========================================== METHOD FILTER  =============================
// const getNotIsActive = users
//   .filter(user => user.isActive === false)
//   .map(user => user.name)

//   console.log(getNotIsActive);

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// ========================================== METHOD  ================================
// Отримати користувача (не масив) по email (поле email, він унікальний).

// const getUserEmail = users
//   .find(user => user.email === 'careybarr@nurali.com')

// console.log(getUserEmail.name);
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// ========================================== METHOD  ================================

// Отримати масив користувачів віком від min до max

// const getUsersWithAge = (userObj, minAge, maxAge) => {
//   const bestAge = userObj.filter(user => user.age > minAge && user.age < maxAge);
//   return bestAge
// };

// console.log(getUsersWithAge(users, 20, 30));

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// ========================================== METHOD  ================================
// Отримати загальну суму балансу (поле balance) всіх користувачів.

// const getTotalBalance = users.reduce((acc, user) => {
//   return acc + user.balance;
// }, 0);

// console.log(getTotalBalance);


// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------




// ========================================== METHOD  ================================
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));



// const getUsrsSkills = users
//   .flatMap(user => user.skills)
//   .filter((user, index, arr) => arr.indexOf(user) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(getUsrsSkills);