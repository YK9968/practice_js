// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// */

// const buttonSwapClick = document.querySelector('#swapButton');
// const leftSwap = document.querySelector('#leftSwapInput');
// const rightSwap = document.querySelector('#rightSwapInput');

// refAllData.buttonSwapClick.addEventListener('click', onbuttonSwapClick);

// function onbuttonSwapClick(event) {
//   const saveValueInput = leftSwap.value;
//   leftSwap.value = rightSwap.value;
//   rightSwap.value = saveValueInput;
// }

// HERNYA

// ======================================================================

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const ButtonPassword = document.querySelector('#passwordButton');

// const taskTitleEL = document.querySelector('.taskTitle');

// ButtonPassword.addEventListener('click', onButtonPasswordClick);

// function onButtonPasswordClick(event) {
//   if (ButtonPassword.textContent === 'Розкрити') {
//     taskTitleEL.style.display = 'block';
//     ButtonPassword.textContent = 'Приховати';
//     return;
//   }
//   taskTitleEL.style.display = 'none';
//   ButtonPassword.textContent = 'Розкрити';
// }
