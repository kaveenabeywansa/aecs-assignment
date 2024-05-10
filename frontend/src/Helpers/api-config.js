const CONST_USER_LIKE_API = 'USER_LIKE_SERVICE_API_ENDPOINT';
const CONST_USER_QUOTE_API = 'USER_QUOTE_SERVICE_API_ENDPOINT';

const BASE_URLS = {
    // [CONST_USER_LIKE_API]: 'http://localhost:5001',
    // [CONST_USER_QUOTE_API]: 'http://localhost:5002'
    [CONST_USER_LIKE_API]: 'http://13.60.45.144:4001',
    [CONST_USER_QUOTE_API]: 'http://13.60.45.144:4002'
};

const APIConfig = function () {
    this.CONST_USER_LIKE_API = CONST_USER_LIKE_API;
    this.CONST_USER_QUOTE_API = CONST_USER_QUOTE_API;

    this.getBaseUrl = (endpoint) => {
        return BASE_URLS[endpoint];
    }

    this.getAppendedUrl = (endpoint, urlSegment) => {
        return this.getBaseUrl(endpoint) + urlSegment;
    }
};

export default new APIConfig();