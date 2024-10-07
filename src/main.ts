import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FiGb, FiFr } from 'oh-vue-icons/icons'

addIcons(FiGb, FiFr)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
