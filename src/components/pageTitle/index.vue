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
    import { mapGetters } from 'vuex'
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
        computed:{
            ...mapGetters(['vuexUserInfor'])
        },
		
		methods:{
			login(){
				let {token}=this.vuexUserInfor,path;
				token? path='loginSuccess':path='login';
				this.$router.push({name:path})
			},
			back(){
				this.$router.back(-1)
			}
			
		}
		
		
	}
</script>

<style scoped lang="less">
</style>
