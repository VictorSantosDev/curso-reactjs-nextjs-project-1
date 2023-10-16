export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photo] = await Promise.all([postsResponse, photoResponse]);

  const postsJson = await posts.json();
  const photoJson = await photo.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photoJson[index].url };
  });

  return postsAndPhotos;
};
