import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    useData: null,
    l: false,
    errorMsg: null,
    successMsg: null
  }),
  getters: {
    user: (state) => state.useData,
    load: (state) => state.l,
    error: (state) => state.errorMsg,
    success: (state) => state.successMsg
  },

  actions: {
    setLoad(value) {
      this.l = value
    },
    async gettoken() {
      await axios.get('/sanctum/csrf-cookie')
    },

    async login(form) {
      this.successMsg = null
      this.errorMsg = null
      this.setLoad(true)
      await this.gettoken()
      axios
        .post('/login', form)
        .then((response) => {
          this.successMsg = 'Connexion réussie !'
          this.errorMsg = null
          this.setLoad(false)
          this.router.push('/dashboard')
          this.successMsg = null
        })
        .catch((error) => {
          this.setLoad(false)
          this.successMsg = null
          this.errorMsg = error.response.data.message
        })
    },

    async register(form) {
      this.successMsg = null
      this.successMsg = null
      this.setLoad(true)
      await this.gettoken()
      axios
        .post('/register', form)
        .then((response) => {
          this.successMsg = 'inscription reussie'
          this.errorMsg = null
          this.setLoad(false)
          this.router.push('/dashboard')
          this.successMsg = null
        })
        .catch((error) => {
          this.setLoad(false)
          this.successMsg = null
          this.errorMsg = error.response.data.message
        })
    },
    async getuser() {
      await this.gettoken()
      const response = await axios.get('/api/user')
      this.useData = response.data
    },
    async logout() {
      this.setLoad(true)
      this.useData = null
      await this.gettoken()
      await axios.post('/logout')
      this.setLoad(false)
      this.router.push('/')
    }
  }
})
