export const getGifs = async (category) => {
  if(!category) {
    return [];
  }
  
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=7NNomU45nwcwH7UGnL8uUao83nKbCUZH`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });
  return gifs;
};
