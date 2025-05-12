import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.use(ToastService)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '',
    },
  },
})

app.mount('#app')
