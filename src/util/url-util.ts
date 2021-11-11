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

/**
 * Get base path from current window location
 */
export const getBasePath = (): string => window.location.href.split('#')[0];

/**
 * Parse the header link element and return all links inside.
 * @param header header of link
 */
export const parseHeaderForLinks = (header: string): any => {
  if (header.length === 0) {
    throw new Error('input must not be of zero length');
  }

  const parts: string[] = header.split(',');
  const links: any = {};

  parts.forEach(p => {
    const section: string[] = p.split(';');

    if (section.length !== 2) {
      throw new Error('section could not be split on ";"');
    }

    const url: string = section[0].replace(/<(.*)>/, '$1').trim();
    const queryString: any = {};

    url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => (queryString[$1] = $3));

    let page: any = queryString.page;

    if (typeof page === 'string') {
      page = parseInt(page, 10);
    }

    const name: string = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = page;
  });
  return links;
};

/**
 * Fetch an entry from URL params
 * @param name the param name to fetch
 * @param search the search part from react router location
 */
export const getUrlParameter = (name: string, search: string): string => {
  const url = new URL(`http://localhost${search}`);
  return url.searchParams.get(name) || '';
};