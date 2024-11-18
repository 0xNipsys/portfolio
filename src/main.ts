import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiGithub } from 'oh-vue-icons/icons'

addIcons(BiGithub)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
