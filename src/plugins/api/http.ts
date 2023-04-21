import axios from 'axios'
// import type { App } from 'vue'

// interface AxiosOptions {
//   baseUrl?: string
//   token?: string
// }

// export default {
//   install: (app: App, options: AxiosOptions) => {
//     app.config.globalProperties.$axios = axios.create({
//       baseURL: options.baseUrl,
//       headers: {
//         Authorization: options.token ? `Bearer ${options.token}` : ''
//       }
//     })
//   }
// }

export default axios.create({
  baseURL: 'https://bible-api.com',
  headers: {
    'Content-type': 'application/json'
  }
})
