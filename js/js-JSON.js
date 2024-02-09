// const dog = {
//   name: 'Mango',
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log('Woof!');
//   },
// };

// const json = JSON.stringify(dog);
// console.log(json); //{"name":"Mango","age":3,"isGoodBoy":true}
//
// =============================================================================
// const a = JSON.stringify(true);
// console.log(typeof a); // string

// const b = JSON.stringify(33);
// console.log(typeof b); // string
// =============================================================================
// function c() {
//   console.log('Well, this is awkward');
// }

// const json1 = JSON.stringify(c);
// console.log(json1);// undefiend
// =============================================================================
// const animal = JSON.parse(json);
// console.log(animal);
// console.log(animal.name);
// =============================================================================
// try {
//   const data = JSON.parse('Well, this is awkward');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message);
//    // Unexpected token W in JSON at position 0
// }

// console.log('✅ This is fine, we handled parsing error in try...catch');
// =============================================================================

// localStorage.setItem('ui-theme', 'light');
// console.log(localStorage);

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings);

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings);
// =========================================================================================

// const formEl = document.querySelector('.feedback-form');
// const localStorageValue = 'example';
// const textarea = formEl.elements.message;

// textarea.value = localStorage.getItem(localStorageValue) ?? '';

// formEl.addEventListener('input', onDinamicValue);

// function onDinamicValue(evt) {
//   localStorage.setItem(localStorageValue, evt.target.value);
// }

// formEl.addEventListener('submit', onClickButtomForm);

// function onClickButtomForm(evt) {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageValue);
//   formEl.reset();
// }

// ====================================================================================
