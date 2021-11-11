''/*
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

import { byteSize, size } from "./index";

describe("Data utils", () => {
  describe("size", () => {
    it("should return the correct size", () => {
      const data = "Hello StarVN";
      expect(size(data)).toBe(10.5);
      expect(size("")).toBe(0);
    });
  });

  describe("byteSize", () => {
    it("should return the correct value", () => {
      const data = "Hello StarVN";
      expect(byteSize(data)).toBe("10.5 bytes");
      expect(byteSize("")).toBe("0 bytes");
    });
  });
});

