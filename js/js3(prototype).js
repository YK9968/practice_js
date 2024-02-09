let user = {
  login: '',
  password: '',
  validatePassword() {
    if (this.password.length >= 6) {
      return true;
    }
    return false;
  },
};

user.password = "6877";
console.log(user.validatePassword());



let userProfile = Object.create(user);
userProfile.username = "Mike";
userProfile.age = 24;
userProfile.gender = "male";

console.log(userProfile);

userProfile.password = '6dgghdh877';
console.log(userProfile.validatePassword());