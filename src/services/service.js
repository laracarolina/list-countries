import { requestUtil } from './requestUtil';

export const service = {
	getAllCountries: () => {
		return requestUtil.get('/all');
	},
	getByCountryName: (value) => {
		return requestUtil.get(`/name/${value}?fullText=true`);
	},
	getByLanguage: (value) => {
		return requestUtil.get(`/lang/${value}`);
	},
	getByCapital: (value) => {
		return requestUtil.get(`/capital/${value}`);
	},
	getByCallingCode: (value) => {
		return requestUtil.get(`/callingcode/${value}`);
	},
	getByRegion: (value) => {
		return requestUtil.get(`/region/${value}`);
	}
};
