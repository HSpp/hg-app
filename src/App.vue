<template>
	<div id="app">
		<pageTitle :title='title' :isGray='isGray' :isBack='isBack' :isLogin='isLogin'></pageTitle>
		<router-view></router-view>
	</div>
</template>
<script>
	import pageTitle from './components/pageTitle'
	import { mapGetters } from 'vuex'
	export default {
		components: {
			pageTitle
		},
		data(){
			return{
				title:'登录',
				isGray:true,
				isBack:false,
				isLogin:true,
				isNav:false,
				first:null
				
			}
			
		},
		mounted(){
			this.backButton()
			
			
		},
		computed:{
			...mapGetters(['vuexTitle'])
		},
		watch: {
			'$route': 'getPath'
		},
		methods: {
			getPath() {
				let {title,isGray,isBack,isLogin,isNav}=this.$route.meta
				this.title=title||this.vuexTitle
				this.isGray=isGray
				this.isBack=isBack
				this.isLogin=isLogin;
				this.isNav=isNav;
				
			},
			backButton(){
				if (window.plus) {
					this.plusready();
					// alert(window.plus)
				} else {
					document.addEventListener("plusready", this.plusready, false);
				}
			},
			plusready(){
				var that = this;
				plus.key.addEventListener('backbutton', function() {
					if(that.isNav){
						if(!that.first){
							that.first = new Date().getTime();
							setTimeout(function() {
								that.first = null;
							}, 1600);
							
						}else{
							if (new Date().getTime() - that.first > 1500) {
								plus.runtime.quit();
							}	
						}
					}else{
						that.first = null;
						that.$router.back(-1);
					}
					
				}, false);
				
			}
			
		}
	}
</script>


<style lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		padding: 50px 0 56.6px 0;

	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
