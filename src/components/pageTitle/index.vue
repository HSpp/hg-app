<template>
	<div >
		<mt-header :title="title" class="customHeader" :class='{gray:isGray}' fixed>
			<div class="loginBtn"  v-if="isLogin" slot="left" @click="login">
				<span class="iconfont icon-yonghuming"  ></span>
			</div>
			<span class="iconfont icon-right"  v-if="isBack" slot="left"  @click="back" ></span>
			
			
		</mt-header>
	</div>
</template>

<script>
	
	export default{
		props:{
			title:{
				default:'首页'
			},
			isBack:{
				default:false
			},
			isGray:{
				default:true
			},
			isLogin:{
				default:true
			}	
		},
		
		methods:{
			login(){
				
				this.$router.push({name:"login"})
			},
			back(){
				this.$router.back(-1)
			}
			
		}
		
		
	}
</script>

<style scoped lang="less">
</style>
