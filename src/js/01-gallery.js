// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImages = document.querySelector('div.gallery');
const galeryItem = galleryItems.map(
  ({ preview, description, original }) =>
    `<a class="gallery__item" href="${original}">
  <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image">
</a>`
);
galleryImages.insertAdjacentHTML('beforeend', galeryItem.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
//console.log(lightbox);
