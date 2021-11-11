/*
 * Copyright (c) 2021 Huy Duc Dao
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const enum StorageType {
  SESSION,
  LOCAL,
}

/**
 * Get either localStorage or sessionStorage
 * @param type storage type
 */
export const getStorage = (type: StorageType): Storage => {
  if (type === StorageType.SESSION) {
    return window.sessionStorage;
  }
  return window.localStorage;
};

/**
 * Set an item into storage
 * @param type storage type
 */
const setItem = (type: StorageType) => (key: string, value: any) => {
  getStorage(type).setItem(key, JSON.stringify(value));
};

/**
 * Get an item from storage
 * @param type storage type
 */
const getItem = (type: StorageType) => (key: string, defaultVal?: any) => {
  const val = getStorage(type).getItem(key);
  if (!val || val === 'undefined') return defaultVal;
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};

/**
 * Remove item from storage
 * @param type storage type
 */
const removeItem = (type: StorageType) => (key: string) => {
  getStorage(type).removeItem(key);
};

export type getItemType = (key: string, defaultVal?: any) => any;
export type setItemType = (key: string, value: any) => void;
export type removeItemType = (key: string) => void;

export interface IStorageAPI {
  get: getItemType;
  set: setItemType;
  remove: removeItemType;
}

export interface IStorageService {
  session: IStorageAPI;
  local: IStorageAPI;
}

export const Storage: IStorageService = {
  session: {
    get: getItem(StorageType.SESSION),
    set: setItem(StorageType.SESSION),
    remove: removeItem(StorageType.SESSION),
  },
  local: {
    get: getItem(StorageType.LOCAL),
    set: setItem(StorageType.LOCAL),
    remove: removeItem(StorageType.LOCAL),
  },
};
