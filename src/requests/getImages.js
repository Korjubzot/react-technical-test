import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(
          (item) => item.type === "image"
        );
        console.log(parsedImages);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
