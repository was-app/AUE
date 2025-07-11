import { boot } from 'quasar/wrappers'
import axios from 'axios'

export default boot(({ app }) => {
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  })

  app.config.globalProperties.$api = api
})
