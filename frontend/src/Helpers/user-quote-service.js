import apiService from './api-service';
import apiConfig from './api-config';

const URL_SEGMENT = '/quotes';

let getUrl = () => {
    return apiConfig.getAppendedUrl(apiConfig.CONST_USER_QUOTE_API, URL_SEGMENT);
};

let QuoteService = function () {
    this.getUserQuotes = async (username) => {
        let url = getUrl() + '/' + username;
        return apiService.get(url)
            .then(res => {
                return res.data.data;
            });
    }

    this.generateNewQuote = async (username) => {
        let url = getUrl() + '/' + username + '/generatequote';
        return apiService.get(url)
            .then(res => {
                return res.data;
            });
    }
};

export default new QuoteService();