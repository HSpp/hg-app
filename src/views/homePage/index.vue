<template>
	<div>
		<mt-header title="首页" class="customHeader" fixed>
			<div class="loginBtn" slot="left" @click="login" >
				<span class="iconfont icon-yonghuming"></span>
			</div>
			
			
		</mt-header>
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
