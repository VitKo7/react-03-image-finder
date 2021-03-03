import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const keyAPI = '20181043-63559380747ebc8efe1373c68';

export const fetchPictures = (query = 'universe', page = '1') => {
  return axios
    .get(
      `/?q=${query}&page=${page}&key=${keyAPI}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};

//   let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=roses&per_page=12&key=20181043-63559380747ebc8efe1373c68&page=1`;

// axios.defaults.headers.common['Authorization'] = 'Bearer 20181043-63559380747ebc8efe1373c68';
