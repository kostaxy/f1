import axios from 'axios';
import {API_ROUTES} from './routes';
import {API_HOST, API_KEY} from '@env';

const baseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
};

const fetchNews = async () => {
  const options = baseOptions;
  options.url = API_ROUTES.newsUrl;
  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export {fetchNews};
