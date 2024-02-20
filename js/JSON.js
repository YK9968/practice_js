const listEl = document.querySelector('.list');

const KEY_API = '42471453-a4a004408e33f852748a0909e';
const BASE_URI = 'https://pixabay.com/api/';
const dog = 'dog+fun';
const link = `${BASE_URI}?key=${KEY_API}&q=${dog}`;

function getImg() {
  return fetch(link)
    .then(respon => {
      if (!respon.ok) {
        throw new Error(`Img error ${respon.status}`);
      }
      return respon.json();
    })
    .catch(error => {
      alert('bad img');
    });
}
getImg().then(data => {
  const masImg = data.hits
    .slice(0, 3)
    .map(({ webformatURL, tags }) => {
      return `
      <img
        src="${webformatURL}"
        alt="${tags}"
      />
  `;
    })
    .join('');
  console.log(masImg);
  listEl.innerHTML = masImg;
});
