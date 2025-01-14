import { getCollections } from './collection.js';
import {
  UNSPLASH_API_KEY,
  API_ENDPOINT,
  populateCollections,
} from './constant.js';

console.log(UNSPLASH_API_KEY);
console.log(API_ENDPOINT);
console.log(await getCollections());
await populateCollection();

(async () => {
  await populateCollections();
})();
