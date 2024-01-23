// const navEL = document.querySelector('.link-list-item');
// console.log(navEL.href);
// navEL.href = ['https://github.com/YK9968/goit-markup-hw-03'];
// console.log(navEL.href);

// const textEl = document.querySelector('.text-lorem');
// console.log(textEl.textContent);
// const titleEl = document.querySelector('.main-title');
// titleEl.textContent = 'Hello World';

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

// const img = document.querySelector('.img-cat');
// img.src = [
//   'https://www.lismore.nsw.gov.au/files/assets/public/v/1/1.-households/3.-pets-amp-animals/images/kitten.jpg?dimension=pageimage&w=480',
// ];
// img.alt = ['cute cat'];
// img.width = 250;

// img.setAttribute('width', 200);

// const closeBtn = document.querySelector('.btn[data-close = "close" ]');
// console.log(closeBtn.dataset.close);

// const newCatImgEl = document.createElement('img');
// newCatImgEl.classList.add('new-add-cat');
// newCatImgEl.src =
//   'https://static.fundacion-affinity.org/cdn/farfuture/xFsdVk-9Vi8ifllknxGrwV-ul0WVSmjXl7DSObD4iLU/mtime:1644939075/sites/default/files/los-10-sonidos-principales-del-gato-fa.jpg';
// newCatImgEl.atl = 'smile cat, funny';
// newCatImgEl.width = 250;

// const bodyEl = document.querySelector('body');

// bodyEl.append(newCatImgEl);
// bodyEl.innerHTML;

const container = document.querySelector('body');

// const colorPikerOptions = [
//   { label: 'red', color: '#FF0000' },
//   { label: 'green', color: '#008000' },
//   { label: 'blue', color: '#0000FF' },
//   { label: 'pink', color: '#FF00FF' },
//   { label: 'brown', color: '#A52A2A' },
//   { label: 'white', color: '#FFFFFF' },
//   { label: 'purple', color: '#800080' },
// ];

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

// const product = {
//   name: 'Car',
//   description:
//     'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum teneturNesciunt beatae, repellendus reiciendis nostrum tenetur',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

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

const createCard = ({ name, description, price }) => {
  const productEL = document.createElement('article');
  productEL.classList.add('product');

  const productTitleEl = document.createElement('h1');
  productTitleEl.textContent = name;
  productTitleEl.classList.add('product-name');

  const productDescrEl = document.createElement('p');
  productDescrEl.textContent = description;
  productDescrEl.classList.add('product-descr');

  const productPriceEl = document.createElement('p');
  productPriceEl.textContent = `Price: ${price} credits`;
  productPriceEl.classList.add('product-price');

  productEL.append(productTitleEl, productDescrEl, productPriceEl);

  return productEL;
};

const elem = productsMasiive.map(createCard);

console.log(elem);

container.append(...elem);
