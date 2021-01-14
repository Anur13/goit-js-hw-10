import itemsTemplate from '../templates/gallery-items.hbs';
import dish from '../menu.json';
const galerryMarkup = itemsTemplate(dish);

const menu = document.querySelector('.menu, js-menu');
menu.insertAdjacentHTML('beforeend', galerryMarkup);
