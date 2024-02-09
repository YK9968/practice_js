const container = document.querySelector('body');

// const navEL = document.querySelector('.link-list-item');
// console.log(navEL.href);
// navEL.href = ['https://github.com/YK9968/goit-markup-hw-03'];
// console.log(navEL.href);

// const textEl = document.querySelector('.text-lorem');
// console.log(textEl.textContent);
// const titleEl = document.querySelector('.main-title');
// titleEl.textContent = 'Hello World';
// ----------------------------------------------------------------------------------
// const hasClass = titleEl.classList.contains('main-title');
// console.log(hasClass);
// titleEl.classList.add('text-decoration');
// console.log(titleEl.classList);
// titleEl.classList.remove('main-title');
// console.log(titleEl.classList);
// titleEl.classList.toggle('main-title');
// console.log(titleEl.classList);
// titleEl.classList.toggle('text-decoration');
// console.log(titleEl.classList);
// titleEl.classList.replace('main-title', 'hero-title');
// console.log(titleEl.classList);

// const textEL = document.querySelector('.text-lorem');
// textEL.classList.add('text-decoration');

// const btnEl = document.querySelector('.btn');
// console.log(btnEl);
// btnEl.style.backgroundColor = 'green';
// btnEl.style.color = 'white';
// btnEl.style.borderRadius = '25px';
// btnEl.style.border = 'none';
// ----------------------------------------------------------------------------------
// const img = document.querySelector('.img-cat');
// (img.src =
//   'https://www.lismore.nsw.gov.au/files/assets/public/v/1/1.-households/3.-pets-amp-animals/images/kitten.jpg?dimension=pageimage&w=480'),
//   (img.alt = 'cute cat');
// img.width = 250;

// img.setAttribute('width', 200);
// ----------------------------------------------------------------------------------
// const closeBtn = document.querySelector('.btn[data-close = "close"]');
// console.log(closeBtn.dataset.close);
// ----------------------------------------------------------------------------------
// const newCatImgEl = document.createElement('img');
// newCatImgEl.classList.add('new-add-cat');
// newCatImgEl.src =
//   'https://static.fundacion-affinity.org/cdn/farfuture/xFsdVk-9Vi8ifllknxGrwV-ul0WVSmjXl7DSObD4iLU/mtime:1644939075/sites/default/files/los-10-sonidos-principales-del-gato-fa.jpg';
// newCatImgEl.atl = 'smile cat, funny';
// newCatImgEl.width = 250;

// const bodyEl = document.querySelector('body');

// bodyEl.append(newCatImgEl);
// ----------------------------------------------------------------------------------

const colorPikerOptions = [
  { label: 'red', color: '#FF0000' },
  { label: 'green', color: '#008000' },
  { label: 'blue', color: '#0000FF' },
  { label: 'pink', color: '#FF00FF' },
  { label: 'brown', color: '#A52A2A' },
  { label: 'white', color: '#FFFFFF' },
  { label: 'purple', color: '#800080' },
];
// ----------------------------------------------------------------------------------
// const elements = colorPikerOptions.map(option => {
//   const buttonEL = document.createElement('button');
//   buttonEL.classList.add('btn-js');
//   buttonEL.type = 'button';
//   buttonEL.textContent = option.label;
//   buttonEL.style.backgroundColor = option.color;

//   return buttonEL;
// });

// container.append(...elements);

// console.log(elements);

// const makeColorFn = options => {
//   return options.map(option => {
//     const buttonEL = document.createElement('button');
//     buttonEL.classList.add('btn-js');
//     buttonEL.type = 'button';
//     buttonEL.textContent = option.label;
//     buttonEL.style.backgroundColor = option.color;

//     return buttonEL;
//   });
// };

const product = {
  name: 'Car',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum tenetur',
  price: 2000,
  available: true,
  onSale: true,
};

// const productEL = document.createElement('article');
// productEL.classList.add('product');

// const productTitleEl = document.createElement('h1');
// productTitleEl.textContent = product.name;
// productTitleEl.classList.add('product-name');

// const productDescrEl = document.createElement('p');
// productDescrEl.textContent = product.description;
// productDescrEl.classList.add('product-descr');

// const productPriceEl = document.createElement('p');
// productPriceEl.textContent = `Price: ${product.price} credits`;
// productPriceEl.classList.add('product-price');

// productEL.append(productTitleEl, productDescrEl, productPriceEl);

// const elementsTwo = makeColorFn(colorPikerOptions);

// container.append(...elementsTwo);
// ------------------------------------------------------------------------------------------
const productsMasiive = [
  {
    name: 'Car',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum tenetur',
    price: 2000,
    available: true,
    onSale: true,
  },
  {
    name: 'Phone',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum tenetur',
    price: 1000,
    available: false,
    onSale: false,
  },
  {
    name: 'Laptop',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum tenetur',
    price: 1500,
    available: true,
    onSale: true,
  },
  {
    name: 'Book',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum tenetur',
    price: 50,
    available: true,
    onSale: false,
  },
  {
    name: 'Watch',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum tenetur',
    price: 300,
    available: false,
    onSale: true,
  },
];
// --------------------------------------------------------------------------------
// const createCard = ({ name, description, price }) => {
//   const productEL = document.createElement('article');
//   productEL.classList.add('product');

//   const productTitleEl = document.createElement('h1');
//   productTitleEl.textContent = name;
//   productTitleEl.classList.add('product-name');

//   const productDescrEl = document.createElement('p');
//   productDescrEl.textContent = description;
//   productDescrEl.classList.add('product-descr');

//   const productPriceEl = document.createElement('p');
//   productPriceEl.textContent = `Price: ${price} credits`;
//   productPriceEl.classList.add('product-price');

//   productEL.append(productTitleEl, productDescrEl, productPriceEl);

//   return productEL;
// };

// const elem = productsMasiive.map(createCard);

// console.log(elem);

// container.append(...elem);

// -----------------------------------------------------------------------------------
const tabletTransactions = [
  {
    ID: 1,
    Price: 10.99,
    Date: '2022-01-01',
    Who: 'John',
    'Type transaction': 'Purchase',
    'Name Score': 'Company A',
    'Number Score': 5,
  },
  {
    ID: 2,
    Price: 5.99,
    Date: '2022-01-02',
    Who: 'Jane',
    'Type transaction': 'Sale',
    'Name Score': 'Company B',
    'Number Score': 4,
  },
  {
    ID: 3,
    Price: 7.49,
    Date: '2022-01-03',
    Who: 'Mike',
    'Type transaction': 'Purchase',
    'Name Score': 'Company C',
    'Number Score': 3,
  },
  {
    ID: 4,
    Price: 3.99,
    Date: '2022-01-04',
    Who: 'Sarah',
    'Type transaction': 'Sale',
    'Name Score': 'Company D',
    'Number Score': 2,
  },
  {
    ID: 5,
    Price: 8.99,
    Date: '2022-01-05',
    Who: 'David',
    'Type transaction': 'Purchase',
    'Name Score': 'Company E',
    'Number Score': 1,
  },
];
// ------------------------------------------------------------------------ var 1
// const createTransactionMarkup = ({ ID, Price, Date, Who }) => {
//   return `
//   <table>
//   <th>${ID}</th>
//   <th> ${Price}</th>
//   <th>${Date}</th>
//   <th>${Who}</th>
//   </table>
//   `;
// };

// const infoEl = tabletTransactions.map(createTransactionMarkup).join('');

// container.insertAdjacentHTML('beforeBegin', infoEl);
//

// ----------------------------------------------------------------------------- var 2
// const createTableValue = ({ ID, Price, Date, Who }) => {
//   const createTable = document.createElement('table');
//   createTable.classList.add('table-transaction');

//   const tr1 = document.createElement('th');
//   tr1.classList.add('tr-trans');
//   tr1.textContent = ID;
//   const tr2 = document.createElement('th');
//   tr2.classList.add('tr-trans');
//   tr2.textContent = Price;
//   const tr3 = document.createElement('th');
//   tr3.classList.add('tr-trans');
//   tr3.textContent = Date;
//   const tr4 = document.createElement('th');
//   tr4.classList.add('tr-trans');
//   tr4.textContent = Who;

//   createTable.append(tr1, tr2, tr3, tr4);

//   console.log(createTable);

//   return createTable;
// };

// createTableValue(tabletTransactions);

// const elemTrans = tabletTransactions.map(createTableValue);

// container.prepend(...elemTrans);

// ----------------------------------------------------------------------------------

// const button = document.querySelector('.my-button');

// const handleClickTest = () => {
//   console.log('The button was pressed and now the next image will appear');
// };

// button.addEventListener('click', handleClickTest);

// -------------------------------------------------------------------------------------
// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);
// -------------------------------------------------------------------------------------
// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector('.target-btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

// -------------------------------------------------------------------------------------

// const clearLogBtn = document.querySelector('.js-clear');
// const logList = document.querySelector('.log-list');
// let keypressCounter = 1;

// console.log(clearLogBtn);

// document.addEventListener('keydown', logMessage);
// document.addEventListener('keyup', logMessage);
// clearLogBtn.addEventListener('click', reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML('afterbegin', markup);

//   if (type === 'keyup') {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = '';
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// -------------------------------------------------------------------------------------

// const registerForm = document.querySelector('.form');

// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === '' || password === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }

// -------------------------------------------------------------------------------------

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// select.addEventListener('change', setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }
// -------------------------------------------------------------------------------------
