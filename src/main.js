import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router.js'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
