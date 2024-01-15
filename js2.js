// знайти сутність з чим роботи, юзер, корзина.
// модулі з якими я повинен розбити свій код
// ОПП - абстракція - створення моделі(приклад програми з чим я буду працювати) - залишаю тільки головні параметри =>
// (стануть властивостями, закладуємо основи методів)
//
//вхід в кабінет
// модель  ""user"" (username, pasword, email) => можна далі створювати об'єкт(модель)
// при вході в кабінет є можливість увійти і вийти
// сворюємо методи (logIn(), logOut(), regestration())
//         ^
//         |
// З чого варто почати
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, access }) {
    super(email);
    this.access = access;
  }

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true
    }
    return false
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
