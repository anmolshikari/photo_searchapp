import { API_ENDPOINT } from './constant.js';

export async function getCollections() {
  const url = API_ENDPOINT + 'collection?client_id=' + UNSPLASH_API_KEY;
  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();
  return data;
}

function populateCollections() {
    const collectionElement = document.querySelector ('#collections');
    const collections = await getCollections();
    collections.map((item) => {
        return `<button onclick="getPhotos('${item.id}')" title="${item.description}"${item.title} </button>`;})
    }
     .join('');
     collectionElement.innerHTML = collectionItemsElements;


