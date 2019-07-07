<template>
	<div>
		<h1>this is homePage!</h1>
	</div>
</template>

<script>
	export default{
		methods:{
			
			login(){
				this.$router.push({name:"login"})
			}
		}
	}
</script>

<style>
</style>
