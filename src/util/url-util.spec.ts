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

import { getUrlParameter, parseHeaderForLinks } from './index';

describe('parseHeaderForLinks', () => {
  it('should throw an error when passed an empty string', () => {
    expect(() => parseHeaderForLinks('')).toThrowError(Error);
  });

  it('should throw an error when passed without comma', () => {
    expect(() => parseHeaderForLinks('test')).toThrowError(Error);
  });

  it('should throw an error when passed without semicolon', () => {
    expect(() => parseHeaderForLinks('test,test2')).toThrowError(Error);
  });

  it('should return links when headers are passed', () => {
    const links = { last: 0, first: 0 };
    expect(parseHeaderForLinks('</api/audits?page=0&size=20>; rel="last",</api/audits?page=0&size=20>; rel="first"')).toEqual(links);
  });
});

describe('getUrlParameter', () => {
  it('should get url params for passed names', () => {
    expect(getUrlParameter('test', '?test=hello')).toEqual('hello');
    expect(getUrlParameter('[test]', '?[test]=hello')).toEqual('hello');
    expect(getUrlParameter('key', '?key=123hghygh1225')).toEqual('123hghygh1225');
    expect(getUrlParameter('key', '?test=1245&key=123hghygh1225')).toEqual('123hghygh1225');
    expect(getUrlParameter('key', '?test=1245&key=123hghygh1225&test2=55558')).toEqual('123hghygh1225');
    expect(getUrlParameter('key', '?test=1245&key=123hghyg+h1225&test2=55558')).toEqual('123hghyg h1225');
  });

  it('should return an empty string for missing name', () => {
    expect(getUrlParameter('test', '?')).toEqual('');
  });
});
