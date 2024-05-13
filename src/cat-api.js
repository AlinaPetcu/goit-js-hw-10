import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_rQJPrfuJlyyHmRrjXMLzVg6VnRB2xLnAzsUy8aVkL8v5A8FjNvrgd8sZI6eZ75I2';

const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('API Error');
    });
};
const fetchCatByBreed = breedId => {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    )
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('API Error');
    });
};

export { fetchBreeds, fetchCatByBreed };