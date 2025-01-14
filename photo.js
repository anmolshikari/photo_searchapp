export async function getphotos(collectionID) {
  const url = API_ENDPOINT + 'collection/'+ collectionID+'/photos?client_id=' + UNSPLASH_API_KEY + '$page= parseInt(Math.random)(* 100);
  const response = await fetch(url, { method: 'GET',});
  const data = await response.json();
  return data;
}
