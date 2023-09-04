<script setup>
import { useAuthStore } from '../stores/Auth.js'
import { onBeforeMount } from 'vue'
const authStore = useAuthStore()

onBeforeMount(async () => {
  await authStore.getuser()
})

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">LOGIN</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">REGISTER</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">DASHBOARD</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/infos">INFOS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">FORM</router-link>
          </li>
          <li class="nav-item">
            <form @submit.prevent="authStore.logout()">
              <button type="submit" v-if="authStore.load == false">logout</button>
              <div class="d-flex justify-content-center" v-else>
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
