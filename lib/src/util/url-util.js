"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlParameter = exports.parseHeaderForLinks = exports.getBasePath = void 0;
/**
 * Get base path from current window location
 */
var getBasePath = function () { return window.location.href.split('#')[0]; };
exports.getBasePath = getBasePath;
/**
 * Parse the header link element and return all links inside.
 * @param header header of link
 */
var parseHeaderForLinks = function (header) {
    if (header.length === 0) {
        throw new Error('input must not be of zero length');
    }
    var parts = header.split(',');
    var links = {};
    parts.forEach(function (p) {
        var section = p.split(';');
        if (section.length !== 2) {
            throw new Error('section could not be split on ";"');
        }
        var url = section[0].replace(/<(.*)>/, '$1').trim();
        var queryString = {};
        url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) { return (queryString[$1] = $3); });
        var page = queryString.page;
        if (typeof page === 'string') {
            page = parseInt(page, 10);
        }
        var name = section[1].replace(/rel="(.*)"/, '$1').trim();
        links[name] = page;
    });
    return links;
};
exports.parseHeaderForLinks = parseHeaderForLinks;
/**
 * Fetch an entry from URL params
 * @param name the param name to fetch
 * @param search the search part from react router location
 */
var getUrlParameter = function (name, search) {
    var url = new URL("http://localhost" + search);
    return url.searchParams.get(name) || '';
};
exports.getUrlParameter = getUrlParameter;
//# sourceMappingURL=url-util.js.map