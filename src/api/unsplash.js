
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    'Client-ID zcA2ENOFS5fUejweMQQsQt_Sam9Hhn6YI85kpGThFIc',
  },
});
