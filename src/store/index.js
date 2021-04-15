import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		countriesList: [],
		filterKeyValue: null,
		filterByValue: 'Country',
		allCountries: [],
		page: 1,
		countryDetailed: null,
		countryBorderslist: null,
		pageCountryBorders: 1,
	},
	mutations: {
		countriesList(state, value) {
			state.countriesList = value;
		},
		filterKeyValue(state, value) {
			state.filterKeyValue = value;
		},
		filterByValue(state, value) {
			state.filterByValue = value;
		},
		allCountries(state, value) {
			state.allCountries = value;
		},
		page(state, value) {
			state.page = value;
		},
		countryDetailed(state, value) {
			state.countryDetailed = value;
		},
		pageCountryBorders(state, value) {
			state.pageCountryBorders = value;
		},
		countryBorderslist(state, value) {
			state.countryBorderslist = value;
		}
	},
});

export default store;
