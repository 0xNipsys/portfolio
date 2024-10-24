import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiGithub, FiFr, FiGb } from 'oh-vue-icons/icons'

addIcons(BiGithub, FiGb, FiFr)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
