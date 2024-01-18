// =============================================== THIS ============================================================

// // Напишіть функцію-конструктор, яка створює об'єкт людини з властивостями ім'я і вік.
// // Використайте this для призначення властивостей для кожного створеного об'єкта.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(`Hello, my name ${this.name}, I am ${this.age}`);
// }

// const person1 = new Person('Alex', 18);
// const person2 = new Person('Bob', 28);

// console.log("--------------------------------------------");
// // Напишіть метод для об'єкта, який збільшує його вік на одиницю.
// // Використайте this, щоб звернутися до властивості об'єкта.

// const obj = {
//   name: 'Bob',
//   age: 21,
//   agePlus() {
//     return this.age + 1;
//   },
// };

// console.log(obj.agePlus());

// console.log('--------------------------------------------');

// // Використовуйте call або apply, щоб викликати функцію з this,
// // якщо потрібно передати інший об'єкт як аргумент.

// const user = {
//     name: "Mike",
//     age: 19,
//     login:"Mike@.com"
// }

// function getInfo() {
//     console.log(`Hello ${this.name}, your age is ${this.age} and you have good login "${this.login}"`);
// }

// getInfo.call(user)