<template>
	<v-app>
		<Header />
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import Header from './components/Header';

export default {
	name: 'App',

	components: {
		Header,
	}

};
</script>

<style>
 body, #app {
	font-family: 'Poppins' !important;
	text-align: center;
	background-color: #f5f5f5 !important;
}
</style>
