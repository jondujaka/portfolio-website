<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss">

@font-face {
  font-family: 'Gingham';
  src: url('../static/font/Gingham.woff2') format('woff2');
  font-weight: 1 999;
}

html {

	&, body, #app {
		width: 100%;
		height: 100%;
	}
	height: 100%;
	#app {
		font-family: "Gingham";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-variation-settings: "wght" 300, "wdht" 0;

		>section {
			width: 100%;
			height: 100%;
		}
	}

}

</style>
