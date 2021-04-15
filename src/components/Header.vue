<template>
	<v-app-bar 
		app 
		color="white">
		<div 
			class="d-flex 
			align-center">
			<v-img
				alt="Mova Logo"
				class="shrink mr-2"
				contain
				src="../assets/mova-logo.png"
				transition="scale-transition"
				width="100"/>
		</div>
		<v-spacer></v-spacer>
		<div 
			v-if="$route.name !== 'countries'" 
			:value="$route.name">
			<div 
				class="d-none d-sm-flex">
				<v-btn
					small
					outlined
					color="purple"
					@click="$router.push('countries')">
					<v-icon>mdi-arrow-left</v-icon>
					<span 
						class="mr-2">
						Back
					</span>
				</v-btn>
			</div>
			<div 
				class="d-flex d-sm-none">
				<v-icon 
					color="purple" 
					@click="$router.push('countries')">
					mdi-arrow-left
				</v-icon>
			</div>
		</div>
	</v-app-bar>
</template>

<script>
export default {
	name: 'Header'
};
</script>
