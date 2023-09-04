<script setup>
import { useAuthStore } from '../stores/Auth.js'
import { ref } from 'vue'
const authStore = useAuthStore()
let form = ref({
  email: '',
  password: ''
})
</script>
<template>
  <div>
    <h2 class="text-center">formulaire de connexion</h2>

    <div
      class="alert alert-success d-flex align-items-center w-50 m-auto mt-5"
      role="alert"
      v-if="authStore.successMsg"
    >
      <div>{{ authStore.successMsg }}</div>
    </div>
    <div
      class="alert alert-danger d-flex align-items-center w-50 m-auto mt-5"
      role="alert"
      v-if="authStore.errorMsg"
    >
      <div>{{ authStore.errorMsg }}</div>
    </div>

    <form @submit.prevent="authStore.login(form)" class="w-50 m-auto mt-5 bg-light p-2">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          id="exampleFormControlInput1"
          required
          placeholder="name@example.com"
        />
      </div>
      <label for="inputPassword5" class="form-label">Password</label>
      <input
        type="password"
        v-model="form.password"
        id="inputPassword5"
        required
        class="form-control"
        aria-describedby="passwordHelpBlock"
      />

      <button type="submit" class="btn btn-success mt-5" v-if="authStore.load == false">
        se connecter
      </button>
      <div class="d-flex justify-content-center" v-else>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </form>
  </div>
</template>
