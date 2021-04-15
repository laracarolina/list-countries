<template>
	<div>
		<div 
			class="hidden-sm-and-down">
			<v-row 
				align="center">
				<v-col 
					class="d-flex" 
					cols="5">
					<v-autocomplete
						v-model="filterByValue"
						:items="filterByItems"
						label="Filter by">
					</v-autocomplete>
				</v-col>
				<v-col 
					class="d-flex" 
					cols="5">
					<v-autocomplete
						:items="filterKeyItems"
						:label="filterByValue"
						v-model="filterKeyValue">
					</v-autocomplete>
				</v-col>
				<v-col 
					class="d-flex" 
					cols="2">
					<v-btn
						depressed
						color="purple"
						width="100%"
						@click="callFilterCountries">
						<span 
							class="search-btn">
							Search
						</span>
					</v-btn>
				</v-col>
			</v-row>
		</div>
		<div 
			class="d-none d-sm-flex d-md-none mr-3 ml-3">
			<v-row 
				align="center">
				<v-col 
					class="d-flex" 
					cols="4">
					<v-autocomplete
						v-model="filterByValue"
						:items="filterByItems"
						label="Filter by">
						</v-autocomplete>
				</v-col>
				<v-col 
					class="d-flex" 
					cols="4">
					<v-autocomplete
						:items="filterKeyItems"
						:label="filterByValue"
						v-model="filterKeyValue">
					</v-autocomplete>
				</v-col>
				<v-col 
					class="d-flex" 
					cols="4">
					<v-btn
						depressed
						color="purple"
						width="100%"
						@click="callFilterCountries"
					>
						<span 
							class="search-btn">
							Search
						</span>
					</v-btn>
				</v-col>
			</v-row>
		</div>
		<div 
			class="d-sm-none mr-3 ml-3">
			<v-row 
				align="center">
				<v-col 
					class="d-flex" 
					cols="12">
					<v-autocomplete
						v-model="filterByValue"
						:items="filterByItems"
						label="Filter by">
					</v-autocomplete>
				</v-col>
			</v-row>
			<v-row 
				align="center">
				<v-col 
					class="d-flex" 
					cols="12">
					<v-autocomplete
						:items="filterKeyItems"
						:label="filterByValue"
						v-model="filterKeyValue">
					</v-autocomplete>
				</v-col>
			</v-row>
			<v-row 
				align="center">
				<v-col 
					class="d-flex" 
					cols="12">
					<v-btn
						depressed
						color="purple"
						width="100%"
						@click="callFilterCountries">
						<span 
							class="search-btn">
							Search
						</span>
					</v-btn>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import { service } from '@/services/service.js';

export default {
	name: 'FilterBar',

	data: () => ({
		filterByItems: [
			'Region',
			'Capital',
			'Language',
			'Country',
			'Calling Code',
		],
		filterByValue: 'Country',
		filterKeyValue: null,
		filterKeyItems: [],
		regions: [],
		capitals: [],
		countriesNames: [],
		languagesNames: [],
		isoLanguages: [],
		callingCodes: [],
	}),

	watch: {
		filterByValue: function(value) {
			this.$store.commit('filterByValue', value);
			switch (value) {
				case 'Region':
					this.filterKeyItems = this.regions;
					break;
				case 'Capital':
					this.filterKeyItems = this.capitals;
					break;
				case 'Language':
					this.filterKeyItems = this.languagesNames;
					break;
				case 'Country':
					this.filterKeyItems = this.countriesNames;
					break;
				case 'Calling Code':
					this.filterKeyItems = this.callingCodes;
					break;
			}
		},
		filterKeyValue: function(value) {
			this.$store.commit('filterKeyValue', value);
		}
	},

	async mounted() {
		this.filterByValue = this.$store.state.filterByValue;
		let countriesList = await service.getAllCountries();
		this.$store.commit('countriesList', countriesList.data);
		this.$store.commit('allCountries', countriesList.data);
		this.regions = [
			...new Set(countriesList.data.map((country) => country.region)),
		].filter((region) => region.length);
		this.capitals = countriesList.data.map((country) => country.capital);
		this.countriesNames = countriesList.data.map((country) => country.name);
		this.languagesNames = [
			...new Set(
				[].concat.apply(
					[],
					countriesList.data.map((country) =>
						country.languages.map((language) => language.name),
					),
				),
			),
		];
		this.isoLanguages = [
			...new Set(
				[].concat.apply(
					[],
					countriesList.data.map((country) => country.languages),
				),
			),
		];
		this.callingCodes = [
			...new Set(
				[].concat.apply(
					[],
					countriesList.data.map((country) =>
						country.callingCodes.map((callingCode) => callingCode),
					),
				),
			),
		];
		if(this.$store.state.filterKeyValue) {
			this.filterKeyItems = this.regions;
			this.filterKeyValue = this.$store.state.filterKeyValue;
			this.callFilterCountries();
		} else {
			this.filterKeyItems = countriesList.data.map((country) => country.name);
		}
	},

	methods: {
		callFilterCountries() {
			this.$parent.filterCountries(
				this.filterByValue,
				this.filterKeyValue,
				this.isoLanguages,
			);
		},
	},
};
</script>

<style scoped>
.search-btn {
	color: white;
}
</style>
