import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewCountries from './views/ViewCountries';
import ViewCountryDetails from './views/ViewCountryDetails';

Vue.use(VueRouter);

const router = new VueRouter({
	history: true,
	routes: [
		{
			path: '/',
			redirect: '/countries',
		},
		{
			path: '/countries',
			name: 'countries',
			component: ViewCountries,
		},
		{
			path: '/country-details',
			name: 'countryDetails',
			component: ViewCountryDetails,
		}
	],
});

export default router;
