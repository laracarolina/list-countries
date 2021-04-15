<template>
	<div 
		class="text-center">
		<v-pagination
			v-if="paginationType === 'byCountries'"
			v-model="$store.state.page"
			class="my-4"
			:length="Math.ceil($store.state.countriesList.length / 12)"
			:total-visible="8"
			color="purple">
		</v-pagination>
		<v-pagination
			v-if="paginationType === 'byCountryBorders'"
			v-model="$store.state.pageCountryBorders"
			class="my-4"
			:length="Math.ceil($store.state.countryBorderslist.length / 12)"
			:total-visible="8"
			color="purple">
		</v-pagination>
	</div>
</template>

<script>
export default {
	name: 'PaginationBar',
	props: {
		paginationType: String
	}
};
</script>
