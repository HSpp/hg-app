<template>
	<div>
		<router-view></router-view>
		<mt-tabbar :value="vuexTabSelected" class='customTabbar' fixed>
			<mt-tab-item id="tab1" @click.native='jumpRoute("home","tab1")'>
				<span slot="icon" class="iconfont icon-shouye"></span>
				首页
			</mt-tab-item>
			<mt-tab-item id="tab2" @click.native='jumpRoute("exhibition","tab2")'>
				<span slot="icon" class="iconfont icon-tuceng"></span>
				展位图
			</mt-tab-item>
			<mt-tab-item id="tab3" @click.native='jumpRoute("search","tab3")'>
				<span slot="icon" class="iconfont icon-sousuo"></span>
				搜索
			</mt-tab-item>
			<mt-tab-item id="tab4" @click.native='jumpRoute("scanCode","tab4")'>
				<span slot="icon" class="iconfont icon-saoma1"></span>
				扫码
			</mt-tab-item>
			<mt-tab-item id="tab5" @click.native='jumpRoute("focus","tab5")'>
				<span slot="icon" class="iconfont icon-wodeguanzhu"></span>
				关注
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
    import { mapGetters,mapMutations} from 'vuex'
	export default {
		
		data() {
			return {
				selected: 'tab1',
				
			}
		},
        computed:{
            ...mapGetters(['vuexTabSelected'])
        },
		
			
		methods:{
            ...mapMutations(['set_tabSelected']),
			jumpRoute(path,tabName){
			    this.set_tabSelected(tabName)
				this.$router.push({name:path})
			}
			
		},
		beforeDestroy(){
			 console.log('组件准备销毁')
			// plus.key.removeEventListener('backbutton',this.plusready)
		}
	}
</script>

<style scoped lang="less">
</style>

