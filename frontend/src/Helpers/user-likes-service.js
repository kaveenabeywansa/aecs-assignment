import apiService from './api-service';
import apiConfig from './api-config';

const URL_SEGMENT = '/likes';

let getUrl = () => {
    return apiConfig.getAppendedUrl(apiConfig.CONST_USER_LIKE_API, URL_SEGMENT);
};

let LikeService = function () {
    this.getUserLikes = async (username) => {
        let url = getUrl() + '/' + username;
        return apiService.get(url)
            .then(res => {
                return res.data.data;
            });
    }

    this.addNewLike = async (username, likeLabel) => {
        let url = getUrl() + '/' + username + '/addlike';
        let requestBody = {
            label: likeLabel
        };
        return apiService.post(url, requestBody)
            .then(res => {
                return res.data;
            })
    }
};

export default new LikeService();