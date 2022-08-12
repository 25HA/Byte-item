<template>
	<div id="app">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<nav>
			
		</nav>
		<router-view />
	</div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
	components: {
		HelloWorld
	}

}
</script>
<style lang="less" scoped>
* {
	margin: 0;
	padding: 0;
}
</style>

