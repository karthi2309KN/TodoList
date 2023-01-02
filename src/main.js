import { createApp } from 'vue'

import App from './App.vue'
import store from './store/index'

import './assets/dist/css/adminlte.min.css'
import './assets/plugins/fontawesome-free/css/all.min.css'
import './assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'
import './assets/dist/css/adminlte.min.css'
import './assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'

import router from './router'

import BaseBadge from "@/components/UI/BaseBadge";

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge)

app.mount('#app')
