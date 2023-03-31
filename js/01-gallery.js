import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems.map((image) =>
    `<li class="gallery__item">
  <a class="gallery__link" >
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</li>`).join("");


console.log(markup);

list.insertAdjacentHTML( 'beforeend', markup);
list.addEventListener('click', onImgClick);

const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onImgClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}





