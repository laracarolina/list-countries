<template>
	<v-container 
		class="mt-8">
		<CountryDetailsCard />
		<v-container
			v-if="$store.state.countryBorderslist.length"
			class="mt-8 mb-3">
			<p 
				:style="bordersTitle" 
				class="mb-8">
				Country Borders:
			</p>
			<div 
				class="hidden-sm-and-down">
				<v-row>
					<v-col
						v-for="countryBorderCode in definePageCountries(this.$store.state.countryBorderslist)"
						:key="countryBorderCode">
						<v-img
							:src="getCountryBorderFlag(countryBorderCode)"
							width="250"
							:style="clickable"
							@click="showDetails(countryBorderCode)">
						</v-img>
					</v-col>
				</v-row>
			</div>
			<div
				class="d-none d-sm-flex d-md-none"
				:style="webKitCenter">
				<v-row>
					<v-col
						v-for="countryBorderCode in definePageCountries(this.$store.state.countryBorderslist)"
						cols="6"
						:key="countryBorderCode">
						<v-img
							:src="getCountryBorderFlag(countryBorderCode)"
							width="300"
							:style="clickable"
							@click="showDetails(countryBorderCode)">
						</v-img>
					</v-col>
				</v-row>
			</div>
			<div
				class="d-sm-none mr-3 ml-3"
				:style="webKitCenter">
				<v-row>
					<v-col
						v-for="countryBorderCode in definePageCountries(this.$store.state.countryBorderslist)"
						cols="12"
						:key="countryBorderCode">
						<v-img
							:src="getCountryBorderFlag(countryBorderCode)"
							width="100%"
							:style="clickable"
							@click="showDetails(countryBorderCode)">
						</v-img>
					</v-col>
				</v-row>
			</div>
		<PaginationBar 
			paginationType="byCountryBorders"/>
		</v-container>
		<v-container
			class="mt-8"
			v-else>
			<p 
				:style="bordersTitle">
				This country has no borders
			</p>
		</v-container>
	</v-container>
</template>

<script>
import CountryDetailsCard from '../components/CountryDetailsCard';
import PaginationBar from '../components/PaginationBar';

export default {
	name: 'ViewCountryDetails',

	components: {
		CountryDetailsCard,
		PaginationBar
	},

	data: () => ({
		bordersTitle: {
			fontWeight: 'bold',
			textAlign: 'left',
			fontSize: '1.2rem'
		},
		webKitCenter: {
			textAlign: '-webkit-center'
		},
		clickable: {
			cursor: 'pointer'
		}
	}),

	methods: {
		definePageCountries(countries) {
			let offset = (this.$store.state.pageCountryBorders - 1) * 12;
			return countries.slice(offset).slice(0, 12);
		},
		getCountryBorderFlag(countryBorderCode) {
			return this.$store.state.allCountries.find(country => country.alpha3Code === countryBorderCode).flag;
		},
		showDetails(countryBorderCode) {
			this.$store.commit('countryDetailed', this.$store.state.allCountries.find(country => country.alpha3Code === countryBorderCode));
			this.$store.commit('countryBorderslist', this.$store.state.allCountries.find(country => country.alpha3Code === countryBorderCode).borders);
			this.$store.commit('pageCountryBorders', 1);
		}
	},
};
</script>

