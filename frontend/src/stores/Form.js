import { defineStore } from 'pinia'
import axios from 'axios'
export const useFormStore = defineStore('form', {
  state: () => ({
    useform: null,
    errorMsg: null,
    successMsg: null
  }),
  getters: {
    dataform: (state) => state.useform,
    error: (state) => state.errorMsg,
    success: (state) => state.successMsg
  },
  actions: {
    async gettoken() {
      await axios.get('/sanctum/csrf-cookie')
    },
    async form(data) {
      this.successMsg = null
      this.errorMsg = null
      await this.gettoken()
      axios
        .post('/api/formulaire', data)
        .then((response) => {
          console.log(response)
          this.successMsg = response.data

          this.errorMsg = null
          this.router.push('/infos')
        })
        .catch((error) => {
          console.log(error)
          this.successMsg = null
          this.errorMsg = error
        })
    },

    async recupuser() {
      await this.gettoken()
      const response = await axios.get('/api/formulaire')
      console.log(response)
      this.useform = response.data
    },
    async modify(data) {
      await this.gettoken()
      const response = await axios.put('/api/formulaire/' + data.id, data)
      console.log(response)
    },
    async deleted(data) {
      await this.gettoken()
      const response = await axios.delete('/api/formulaire/ ' + data.id)
      this.recupuser()
      console.log(response)
    }
  }
})
