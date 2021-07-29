import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import currencyFilter from '@/filters/currency.filter.js'
import messagePlugine from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min.js'
import Loader from '@/components/app/Loader'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.use(messagePlugine)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)
Vue.config.productionTip = false

firebase.initializeApp({
	apiKey: 'AIzaSyBZAQutbZywjhD-Pl8z3rQVaqZl5ZP30D4',
	authDomain: 'my-vue-crm-4886f.firebaseapp.com',
	databaseURL: 'https://my-vue-crm-4886f-default-rtdb.firebaseio.com',
	projectId: 'my-vue-crm-4886f',
	storageBucket: 'my-vue-crm-4886f.appspot.com',
	messagingSenderId: '363556133595',
	appId: '1:363556133595:web:001652f8166f00f33bcafe',
})

let app

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: (h) => h(App),
		}).$mount('#app')
	}
})
