import axios from 'axios';

const APIService = function () {
    this.get = async (url) => {
        return axios.get(url);
    }

    this.post = async (url, body) => {
        return axios.post(url, body);
    }
};

export default new APIService();