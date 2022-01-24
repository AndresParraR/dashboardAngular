import axios from 'axios'
import { environment } from '../environments/environment';

export default () => {
  return axios.create({
    baseURL: environment.apiUrl,
    withCredentials: false,
    headers: {
      "content-type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,observe",
      "Access-Control-Allow-Credentials": "true",
    }
  })
}