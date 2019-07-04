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
					component: home
				},
				{
					path: '/search',
					name: 'search',
					component: search
				},
				
			]
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/result',
			name: 'result',
			component: result
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
			component: loginSuccess
		}
	]
})
