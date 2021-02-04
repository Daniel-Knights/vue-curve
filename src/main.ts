import { createApp } from 'vue'
import App from './App.vue'
import VueCurve from './lib'

const app = createApp(App)

app.use(VueCurve)

app.mount('#app')
