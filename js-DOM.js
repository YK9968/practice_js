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

const btnEl = document.querySelector('.btn');
console.log(btnEl);
btnEl.style.backgroundColor = 'green';
btnEl.style.color = 'white';
btnEl.style.borderRadius = '25px';
btnEl.style.border = 'none';

const img = document.querySelector('.img-cat');
img.src = [
  'https://www.lismore.nsw.gov.au/files/assets/public/v/1/1.-households/3.-pets-amp-animals/images/kitten.jpg?dimension=pageimage&w=480',
];
img.alt = ['cute cat'];
img.width = 250;

img.setAttribute('width', 200);

const closeBtn = document.querySelector('.btn[data-close = "close" ]');
console.log(closeBtn.dataset.close);

const newCatImgEl = document.createElement('img');
newCatImgEl.classList.add('new-add-cat');
newCatImgEl.src =
  'https://static.fundacion-affinity.org/cdn/farfuture/xFsdVk-9Vi8ifllknxGrwV-ul0WVSmjXl7DSObD4iLU/mtime:1644939075/sites/default/files/los-10-sonidos-principales-del-gato-fa.jpg';
newCatImgEl.atl = 'smile cat, funny';
newCatImgEl.width = 250;

const bodyEl = document.querySelector('body');

bodyEl.append(newCatImgEl);
bodyEl.innerHTML