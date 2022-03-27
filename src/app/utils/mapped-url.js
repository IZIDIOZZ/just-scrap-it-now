import mappedSelectorForUrl from "../mapping/mappedSelectorsUrl.js";

const END_OF_HTTPS = 8;

const getSelectorsFromMappedUrl = (url) => mappedSelectorForUrl[splitUrl(url)] || {};

const splitUrl = (url) => url.slice(END_OF_HTTPS, url.length - 1).split('/')[0];

const removeQueryString = (url) => url.split('?')[0];

export {
    getSelectorsFromMappedUrl,
    removeQueryString
};
