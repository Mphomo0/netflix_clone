import axios from 'axios';

/** base url to make requests to the movie api */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/"
});

export default instance;