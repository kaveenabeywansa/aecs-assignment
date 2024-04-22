const BASE_URL = 'http://localhost:5001';

const APIConfig = function () {
    this.getBaseUrl = () => {
        return BASE_URL;
    }

    this.getAppendedUrl = (urlSegment) => {
        return this.getBaseUrl() + urlSegment;
    }
};

export default new APIConfig();