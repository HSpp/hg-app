<template>
	<div>
		<router-view></router-view>
		<mt-tabbar v-model="selected" class='customTabbar' fixed>
			<mt-tab-item id="tab1" @click.native='jumpRoute("home")'>
				
				<span slot="icon" class="iconfont icon-shouye"></span>
				首页
			</mt-tab-item>
			<mt-tab-item id="tab2" @click.native='jumpRoute("exhibition")'>
				<span slot="icon" class="iconfont icon-tuceng"></span>
				展位图
			</mt-tab-item>
			<mt-tab-item id="tab3" @click.native='jumpRoute("search")'>
				<span slot="icon" class="iconfont icon-sousuo"></span>
				搜索
			</mt-tab-item>
			<mt-tab-item id="tab4" @click.native='jumpRoute("scanCode")'>
				<span slot="icon" class="iconfont icon-saoma1"></span>
				扫码
			</mt-tab-item>
			<mt-tab-item id="tab5" @click.native='jumpRoute("focus")'>
				<span slot="icon" class="iconfont icon-wodeguanzhu"></span>
				关注
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	
	export default {
		
		data() {
			return {
				selected: 'tab1'
			}
		},
		methods:{
			handleClose(){
				
			},
			test(e){
				console.log(e)
			},
			jumpRoute(path){
				this.$router.push({name:path})
			}
		}
	}
</script>

<style scoped lang="less">
</style>

