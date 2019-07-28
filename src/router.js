 import Vue from 'vue'
import Router from 'vue-router'
const navPage = () => import('@/views/navPage')
const login = () => import('@/views/login')
const home = () => import('@/views/homePage')
const loginSuccess = () => import('@/views/login/loginSuccess')
const search = () => import('@/views/search')
const result = () => import('@/views/search/result')
const scanCode=()=>import('@/views/scanCode')
const photo=()=>import('@/views/photo')
const exhibition=()=>import('@/views/position')
const exhibitionList=()=>import('@/views/position/positionList')

Vue.use(Router)

export default new Router({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'navPage',
			component: navPage,
			redirect:'/home',
			
			children: [
				{
					path: '/home',
					name: 'home',
					component: home,
					meta:{
						title:"首页",
						isGray:true,
						isNav:true
					},
					
				},
				{
					path: '/search',
					name: 'search',
					component: search,
					meta:{
						title:"搜索",
						isGray:true,
						isBack:false,
						isLogin:false,
						isNav:true
					}
				},
				{
					path: '/exhibition',
					name: 'exhibition',
					component: exhibition,
					meta:{
						title:"展位图",
						isGray:true,
						isBack:false,
						isLogin:false,
						isNav:true
					}
				},
				
			]
		},
		{
			path: '/login',
			name: 'login',
			component: login,
			meta:{
				title:"登录",
				isGray:false,
				isBack:true,
				isLogin:false
			}
		},
		
		{
			path: '/exhibitionList',
			name: 'exhibitionList',
			component: exhibitionList,
			meta:{
				title:"",
				isGray:true,
				isBack:true,
				isLogin:false
			}
		},
		{
			path: '/result',
			name: 'result',
			component: result,
			meta:{
				title:"搜索结果",
				isGray:true,
				isBack:true,
				isLogin:false
			}
		},
		{
			path: '/scanCode',
			name: 'scanCode',
			component: scanCode
		},
		{
			path: '/focus',
			name: 'focus',
			component: photo
		},
		

		{
			path: '/loginSuccess',
			name: 'loginSuccess',
			component: loginSuccess,
			meta:{
				title:"个人信息",
				isGray:false,
				isBack:true,
				isLogin:false
			}
		}
	]
})
