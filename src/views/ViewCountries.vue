<template>
	<v-container 
		class="mt-5">
		<FilterBar />
		<v-container
			v-if="this.$store.state.countriesList.length"
			class="mt-5 mb-3">
			<div 
				class="hidden-sm-and-down">
				<v-row>
					<v-col
						v-for="country in definePageCountries(this.$store.state.countriesList)"
						:key="country.name">
						<v-img
							:src="country.flag"
							width="250"
							@click="showDetails(country)"
							:style="clickable">
						</v-img>
					</v-col>
				</v-row>
			</div>
			<div
				class="d-none d-sm-flex d-md-none"
				:style="webKitCenter">
				<v-row>
					<v-col
						v-for="country in definePageCountries(this.$store.state.countriesList)"
						cols="6"
						:key="country.name">
						<v-img
							:src="country.flag"
							width="300"
							@click="showDetails(country)"
							:style="clickable">
						</v-img>
					</v-col>
				</v-row>
			</div>
			<div
				class="d-sm-none mr-3 ml-3"
				:style="webKitCenter">
				<v-row>
					<v-col
						v-for="country in definePageCountries(this.$store.state.countriesList,)"
						cols="12"
						:key="country.name">
						<v-img
							:src="country.flag"
							width="100%"
							@click="showDetails(country)"
							:style="clickable">
						</v-img>
					</v-col>
				</v-row>
			</div>
		</v-container>
		<PaginationBar 
			paginationType="byCountries"/>
	</v-container>
</template>

<script>
import FilterBar from '../components/FilterBar';
import PaginationBar from '../components/PaginationBar';
import { service } from '@/services/service.js';

export default {
	name: 'ViewCountries',

	components: {
		FilterBar,
		PaginationBar,
	},

	data: () => ({
		clickable: {
			cursor: 'pointer'
		},
		webKitCenter: {
			textAlign: '-webkit-center'
		}
	}),

	methods: {
		definePageCountries(countries) {
			let offset = (this.$store.state.page - 1) * 12;
			return countries.slice(offset).slice(0, 12);
		},
		async filterCountries(filterByValue, filterKeyValue, isoLanguages) {
			let filteredCountries = [];
			switch (filterByValue) {
				case 'Region':
					filteredCountries = await service.getByRegion(
						filterKeyValue.toLowerCase(),
					);
					break;
				case 'Capital':
					filteredCountries = await service.getByCapital(
						filterKeyValue.toLowerCase(),
					);
					break;
				case 'Language':
					filteredCountries = await service.getByLanguage(
						isoLanguages.find(
							(language) => language.name === filterKeyValue,
						).iso639_1,
					);
					break;
				case 'Country':
					filteredCountries = await service.getByCountryName(
						filterKeyValue.toLowerCase(),
					);
					break;
				case 'Calling Code':
					filteredCountries = await service.getByCallingCode(
						filterKeyValue.toLowerCase(),
					);
					break;
				default:
					filteredCountries = await service.getAllCountries();
					break;
			}
			this.$store.commit('countriesList', filteredCountries.data);
		},
		showDetails(country) {
			this.$store.commit('countryDetailed', country);
			this.$store.commit('countryBorderslist', country.borders);
			this.$store.commit('pageCountryBorders', 1);
			this.$router.push('country-details');
		},
	}
};
</script>
