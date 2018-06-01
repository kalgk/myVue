<template>
  <div>
	<headBar></headBar>
  </div>
</template>

<script>
	export default {
		mounted(){
			this.$store.state.head.title = '首页';
			this.$store.state.head.isReturn = true;
		}
	}
</script>

<style>

</style>
