import axios, { AxiosInstance } from 'axios';
import { loadConfig } from '../config';

export let api: AxiosInstance;

export const initClient = () => {
  const options = loadConfig();

  api = axios.create({
    baseURL: options.host,
    headers: {
      'PRIVATE-TOKEN': options.token,
      'Content-Type': 'application/json',
    },
  })

  return api;
}
