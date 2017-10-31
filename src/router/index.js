import Vue from 'vue'
import Router from 'vue-router'
import all from '@/components/all'
import login from '@/components/longin'
import home from '@/components/home'
import details from '@/components/details'
import good from '@/pages/good'
import share from '@/pages/share'
import ask from '@/pages/ask'
import job from '@/pages/job'
import dev from '@/pages/dev'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: home,
			children: [{
				path: '/',
				name: 'all',
				component: all
			},{
				path: '/good',
				name: 'good',
				component: good
			},{
				path: '/share',
				name: 'share',
				component: share
			},{
				path: '/ask',
				name: 'ask',
				component: ask
			},{
				path: '/job',
				name: 'job',
				component: job
			},{
				path: '/dev',
				name: 'dev',
				component: dev
			}]
		},{
			path: '/login',
			name: 'login',
			component: login
		},{
			path: '/details',
			name: 'details',
			component: details
		}
	]
})