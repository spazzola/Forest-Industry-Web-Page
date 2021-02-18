import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueObserveVisibility from 'vue-observe-visibility'

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(store).use(router).use(VueObserveVisibility).mount('#app')
