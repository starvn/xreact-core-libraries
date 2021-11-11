"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('Data utils', function () {
    describe('size', function () {
        it('should return the correct size', function () {
            var data = 'Hello Jhipster';
            expect((0, index_1.size)(data)).toBe(10.5);
            expect((0, index_1.size)('')).toBe(0);
        });
    });
    describe('byteSize', function () {
        it('should return the correct value', function () {
            var data = 'Hello Jhipster';
            expect((0, index_1.byteSize)(data)).toBe('10.5 bytes');
            expect((0, index_1.byteSize)('')).toBe('0 bytes');
        });
    });
});
//# sourceMappingURL=data-util.spec.js.map