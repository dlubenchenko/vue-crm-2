import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		meta: { layout: 'main' },
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/login',
		name: 'login',
		meta: { layout: 'empty' },
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'register',
		meta: { layout: 'empty' },
		component: () => import('../views/Register.vue'),
	},
	{
		path: '/categories',
		name: 'categories',
		meta: { layout: 'main' },
		component: () => import('../views/Categories.vue'),
	},
	{
		path: '/detaile',
		name: 'detaile',
		meta: { layout: 'main' },
		component: () => import('../views/DetaileRecord.vue'),
	},
	{
		path: '/history',
		name: 'history',
		meta: { layout: 'main' },
		component: () => import('../views/History.vue'),
	},
	{
		path: '/planing',
		name: 'planing',
		meta: { layout: 'main' },
		component: () => import('../views/Planing.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		meta: { layout: 'main' },
		component: () => import('../views/Profile.vue'),
	},
	{
		path: '/record',
		name: 'record',
		meta: { layout: 'main' },
		component: () => import('../views/Record.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
