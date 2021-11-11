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

import { isPromise } from './index';

describe('Promise util', () => {
  describe('isPromise', () => {
    it('should return false when passed object is not promise like', () => {
      const inp = {};
      expect(isPromise(inp)).toEqual(false);
    });
    it('should return true when passed object is promise like', () => {
      const inp = Promise.resolve(true);
      expect(isPromise(inp)).toEqual(true);
    });
  });
});
