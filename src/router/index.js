import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/views/MainView'
import ProjectView from '@/views/ProjectView'
Vue.use(Router)
export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: MainView
	}, {
		path: '/project',
		name: 'Project',
		component: ProjectView
	}]
})
