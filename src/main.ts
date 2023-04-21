import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  icons: {
    aliases,
    sets: {
      mdi
    },
    defaultSet: 'mdi'
  },
  components,
  directives
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
