
/**
 * A function that returns a list of gifs
 * @param {string} category the category to search
 * @returns The list of gifs
 */
export const getGifs = async (category) => {
  const apiKey = "oBmV5ZvmNU70crb5tWieWbxMiTtddKj0";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
