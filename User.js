class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(this.name + ' hello');
  }
}

const test = new User('Mike');

console.log(test.sayHello());
