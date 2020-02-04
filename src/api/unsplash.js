import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 098ba34bf7a9e461a4fa9f9183af5cf31e200955d58c7e0612299db9a71c60f1',
  },
});
