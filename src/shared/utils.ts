import { FlagType } from '../types/types';

const keys = {
  flag: 'appmovtv_flag',
};

const storageWrapper = (
  action: 'set' | 'get' | 'remove',
  key: string,
  value?: any
): any => {
  try {
    if (action === 'set') {
      localStorage.setItem(key, value);
    } else if (action === 'get') {
      return localStorage.getItem(key);
    } else if (action === 'remove') {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error('LocalStorage operation failed:', error);
  }
};

export const setFlag = (flag: FlagType) => {
  storageWrapper('set', keys.flag, flag);
};

export const getFlag = (): FlagType => {
  return storageWrapper('get', keys.flag);
};

export const removeFlag = () => {
  storageWrapper('remove', keys.flag);
};
