import axios from 'axios'

const localURL = 'http://192.168.1.15:3000/api'

const instance = axios.create({
  baseURL: localURL
});

export default instance;
