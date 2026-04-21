import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './images';

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
         <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        </a>
        </li>
      `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});
