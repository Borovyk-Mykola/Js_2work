import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.map(element => {
    gallery.innerHTML += `<a class="gallery__link" href="${element.original}" onclick="return false;"><img class="gallery__image" src="${element.preview}" alt="${element.description}"/>`
})

const instance = gallery.insertAdjacentHTML('beforebegin', '<div class="modal"></div>')

const modal = document.querySelector('.modal')

gallery.addEventListener('click', (e) => {

    if (e.target.className !== 'gallery__image') {
        return;
    }

    e.target.src = e.target.parentNode.href
    modal.innerHTML = e.target.outerHTML
         
})

console.log(galleryItems);
