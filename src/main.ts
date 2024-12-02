import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiGithub, MdTablechartSharp, MdGridviewSharp } from 'oh-vue-icons/icons'
import { GetCurrentCid, GoToCid } from '@/update'
import { OLD_CID } from '@/mocks/cid'

async function enableIpfsMocking() {
  if (!import.meta.env.DEV) {
    return
  }
  if (!GetCurrentCid()) {
    GoToCid(OLD_CID)
  }
  const { worker } = await import('./mocks/browser')
  return worker.start({ onUnhandledRequest: 'bypass' })
}

enableIpfsMocking().then(() => {
  addIcons(BiGithub, MdTablechartSharp, MdGridviewSharp)

  const app = createApp(App)
  app.component('v-icon', OhVueIcon)
  app.mount('#app')
})
