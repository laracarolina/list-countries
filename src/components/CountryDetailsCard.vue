<template>
	<div>
		<div 
			class="hidden-sm-and-down">
			<v-row 
				:style="centerContent">
				<v-col 
					cols="5" 
					:style="alignRight">
					<v-img 
						:src="$store.state.countryDetailed.flag" 
						width="350">
					</v-img>
				</v-col>
				<v-col 
					cols="4" 
					:style="alignTextLeft">
					<p>Name: {{ $store.state.countryDetailed.name }}</p>
					<p>Capital: {{ $store.state.countryDetailed.capital }}</p>
					<p 
						:style="linkStyle" 
						@click="listCountriesByRegion($store.state.countryDetailed.region)">
						Region: {{ $store.state.countryDetailed.region }}
					</p>
					<p>Subregion: {{ $store.state.countryDetailed.subregion }}</p>
					<p> Population: {{ $store.state.countryDetailed.population }}</p>
					<div :style="displayFlex">
						<p>Languages:</p>
						<p 
							v-for="(lang, index) in $store.state.countryDetailed.languages" 
							:key="index">
							{{' ' + lang.name + (index !== $store.state.countryDetailed.languages.length -1 ? ', ' : '')}}
						</p>
					</div>
				</v-col>
			</v-row>
		</div>
		<div 
			class="d-none d-sm-flex d-md-none">
			<v-row 
				:style="centerContent">
				<v-col 
					cols="6" 
					:style="alignRight">
					<v-img 
						:src="$store.state.countryDetailed.flag" 
						width="300">
					</v-img>
				</v-col>
				<v-col 
					cols="6" 
					:style="spanStyle">
					<span 
						class="mb-1">
						Name: {{ $store.state.countryDetailed.name }}
					</span>
					<span 
						class="mb-1">
						Capital: {{ $store.state.countryDetailed.capital }}
					</span>
					<span 
						class="mb-1" 
						:style="linkStyle" 
						@click="listCountriesByRegion($store.state.countryDetailed.region)">
						Region: {{ $store.state.countryDetailed.region }}
					</span>
					<span 
						class="mb-1">
						Subregion: {{ $store.state.countryDetailed.subregion }}
					</span>
					<span 
						class="mb-1">
						Population: {{ $store.state.countryDetailed.population }}
					</span>
					<div 
						:style="displayFlex">
						<span>Languages:</span>
						<span 
							v-for="(lang, index) in $store.state.countryDetailed.languages" 
							:key="index">
							{{' ' + lang.name + (index !== $store.state.countryDetailed.languages.length -1 ? ', ' : '')}}
						</span>
					</div>
				</v-col>
			</v-row>
		</div>
		<div
			class="d-sm-none mr-3 ml-3"
			:style="webKitCenter"
		>
			<v-row 
				:style="centerContent">
				<v-col 
					cols="12" 
					:style="alignLeft">
					<v-img 
						:src="$store.state.countryDetailed.flag" 
						width="400">
					</v-img>
				</v-col>
				<v-col 
					cols="12" 
					:style="alignTextLeft">
					<p>Name: {{ $store.state.countryDetailed.name }}</p>
					<p>Capital: {{ $store.state.countryDetailed.capital }}</p>
					<p 
						:style="linkStyle" 
						@click="listCountriesByRegion($store.state.countryDetailed.region)">
						Region: {{ $store.state.countryDetailed.region }}
					</p>
					<p>Subregion: {{ $store.state.countryDetailed.subregion }}</p>
					<p>Population: {{ $store.state.countryDetailed.population }}</p>
					<div 
						:style="displayFlex">
						<p>Languages:</p>
						<p 
							v-for="(lang, index) in $store.state.countryDetailed.languages" 
							:key="index">
							{{' ' + lang.name + (index !== $store.state.countryDetailed.languages.length -1 ? ', ' : '')}}
						</p>
					</div>
				</v-col>
			</v-row>
			<v-row> </v-row>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CountryDetailsCard',

	data: () => ({
		linkStyle: {
			textDecoration: 'underline',
			color: 'purple',
			cursor: 'pointer'
		},
		centerContent: {
			justifyContent: 'center', 
			alignItems: 'center'
		},
		alignRight: {
			textAlign: '-webkit-right'
		},
		alignLeft: {
			textAlign: '-webkit-left'
		},
		alignTextLeft: {
			textAlign: 'left'
		},
		displayFlex: {
			display: 'flex'
		},
		spanStyle: {
			textAlign: 'left', 
			display: 'grid'
		},
		webKitCenter: {
			textAlign: '-webkit-center'
		}
	}),

	methods: {
		listCountriesByRegion(region) {
			this.$store.commit('filterByValue', 'Region');
			this.$store.commit('filterKeyValue', region);
			this.$router.push('countries');
		}
	}
};
</script>
