import localforage from 'localforage';
import { camelCase } from 'lodash/fp';

export const setCache = async (key, data) => {
  try {
    await localforage.setItem(camelCase(key), data);
  } catch(e) {
  }
  return;
}

export const getCache = async (key) => {
  try {
    return await localforage.getItem(camelCase(key));
  } catch(e) {
    return null;
  }
}
