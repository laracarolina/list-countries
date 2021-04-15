import axios from 'axios';

export const requestUtil = {
	BASE_URL: process.env.VUE_APP_PATH,

	get: function(url, successCallback, errorCallback) {
		if (!successCallback ^ !errorCallback) {
			throw new TypeError(
				'Arguments successCallback and errorCallback must provided or ommited both at same time',
			);
		} else if (successCallback && errorCallback) {
			return axios
				.get(this.BASE_URL + url)
				.then((response) =>
					successCallback(response.data, response.headers),
				)
				.catch((error) => errorCallback(error));
		} else {
			return axios.get(this.BASE_URL + url);
		}
	},
};
