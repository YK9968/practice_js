// class UserPrice {
//   #price;

//   constructor(name, rating, price) {
//     this.name = name;
//     this.rating = rating;
//     this.#price = price;
//   }

//   getPrice() {
//     return this.#price;
//   }

//   setPrice() {
//     if (this.rating > 8) {
//       this.#price = this.#price - (this.#price * 0.2);
//     } else {
//       this.#price = this.#price - (this.#price * 0.1);
//     }
//   }
// }

// class Person extends UserPrice {
//   constructor(name, rating, price, nameBook) {
//     super(name, rating, price);
//     this.nameBook = nameBook;
//   }

//   getMessage() {
//     this.setPrice();
//     return `Hi ${this.name}, you cost ${this.nameBook}, you must pay ${this.getPrice()}}`;
//   }
// }

// const user1 = new Person('Alex', 5, 100, 'Tales');

// console.log(user1.getMessage());
