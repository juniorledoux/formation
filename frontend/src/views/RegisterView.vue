<script setup>
import { useAuthStore } from '../stores/Auth.js'
import { ref } from 'vue'
const authStore = useAuthStore()
let form = ref({
  name: '',
  tel: '',
  email: '',
  password: '',
  password_confirmation: ''
})
</script>
<template>
  <div>
    <h2 class="text-center">formulaire d'inscription</h2>
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
    <form @submit.prevent="authStore.register(form)" class="w-50 m-auto mt-5 bg-light p-2">
      <div class="mt-3 form-group">
        <label for="name" class="form-label">Nom</label>
        <input
          type="text"
          v-model="form.name"
          class="form-control"
          id="name"
          placeholder="entrer votre nom"
        />
      </div>
      <div class="mt-3 form-group">
        <label for="telephone" class="form-label">telephone</label>
        <input
          type="number"
          v-model="form.tel"
          class="form-control"
          id="telephone"
          placeholder="entrer votre numero de téléphone"
        />
      </div>

      <div class="mt-3 form-group">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div class="mt-3 form-group">
        <label for="inputPassword5" class="form-label">mot de passe</label>
        <input
          type="password"
          v-model="form.password"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
        />
      </div>
      <div class="mt-3 form-group">
        <label for="password_confirmation" class="form-label">confirmer le mot de passe</label>
        <input
          type="password"
          v-model="form.password_confirmation"
          id="password_confirmation"
          class="form-control"
          aria-describedby="password_confirmation"
        />
      </div>
      <div class="d-flex justify-content-evenly">
        <button type="submit" class="btn btn-success mt-5" v-if="authStore.load == false">
          s'incrire
        </button>
        <div class="d-flex justify-content-center" v-else>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <router-link class="btn btn-danger mt-5" to="/">retour</router-link>
      </div>
    </form>
  </div>
</template>
