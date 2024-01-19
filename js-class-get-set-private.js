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

// class Book {
//   title;
//   author;
//   category;
//   year;

//   constructor(title, author, category, year) {
//     this.title = title;
//     this.author = author;
//     this.category = category;
//     this.year = year;
//   }

//   getTitle() {
//     return this.title;
//   }
//   setTitle(newTitle) {
//     this.title = newTitle;
//   }
//   getAuthor() {
//     return this.author;
//   }
//   setAuthor(newAuthor) {
//     this.author = newAuthor;
//   }
//   getCategory() {
//     return this.category;
//   }
//   setCategory(newCategore) {
//     this.category.push(newCategore);
//   }
//   getYear() {
//     return this.year;
//   }
//   setYear(newYear) {
//     this.year = newYear;
//   }
// }

// const user1 = new Book('Lord of the rings', 'Mike super Author', ['fantastic', 'adventure'], 2011);
// const user2 = new Book('How find new friends', 'Super author Dayl Carnegy', ['psihologie'], 1992);
// const user3 = new Book(
//   'Sherlok Holms',
//   'Super author Den',
//   ['detective', 'adventure', 'dram'],
//   1997
// );

// class ShopBook extends Book {
//   rating;
//   #price;

//   constructor(title, author, category, year, price, rating) {
//     super(title, author, category, year);
//     this.price = price;
//     this.rating = rating;
//   }

//   getPrice() {
//     return this.#price;
//   }
//   setPrice(value) {
//     if (this.rating > value) {
//       this.price = this.price - this.price * 0.2;
//     } else {
//       return (this.price = this.price - this.price * 0.1);
//     }
//   }
// }

// const user4 = new ShopBook(
//   'Game of trones',
//   'Super author Gregory',
//   ['dram', 'fantastick', 'horror'],
//   1992,
//   250,
//   8.9
// );
// console.log(user4);
// console.log(user4.setPrice(6));
// console.log(user4);
// console.log(user4.setYear(1996));
// console.log(user4);
// console.log(user4.setPrice(12));
// console.log(user4);
// user4.setCategory('historical');
// console.log(user4);

//---------------------------------------------------- CALCULATE --------------------------------------

class Calculate {
  a;
  b;
  constructor(a, b, value) {
    this.a = a;
    this.b = b;
    this.value = value;
  }
  getCalculate() {
    return this.value;
  }

  setCalculate(number) {
    if (number === '+') {
      this.value = this.a + this.b;
    } else if (number === '-') {
      this.value = this.a - this.b;
    } else if (number === '*') {
      this.value = this.a * this.b;
    } else if (number === '/') {
      this.value = this.a / this.b;
    } else
      this.value = 'Sorry but i don`t understand you "number", try again';
  }
}

const user1 = new Calculate(10, 4);
user1.setCalculate('+');
console.log(user1.getCalculate());

