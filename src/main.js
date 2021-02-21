import { createApp } from 'vue'

import Rx from 'rxjs/Rx';
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(Rx).mount('#app')
