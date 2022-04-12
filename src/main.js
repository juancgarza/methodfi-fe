import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './styles/app.css'

createApp(App).use(router,store, VueAxios, axios).mount('#app')
