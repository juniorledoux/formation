<script setup>
import { useAuthStore } from '../stores/Auth.js'
import { onMounted, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()

onBeforeMount(async () => {
  await authStore.getuser()
})
// onMounted(async () => {
//   if (!authStore.user) router.push('/login')
// })
</script>
<template>
  <div>
    <div class="w-50 m-auto bg-light p-5 mt-5">
      <h1 class="text-center">DASHBOARD</h1>
      <div class="mt-3">
        <span>NOM: </span>
        <span>{{ authStore.user?.name }} </span>
      </div>
      <div class="mt-3">
        <span>tel: </span>
        <span> {{ authStore.user?.tel }} </span>
      </div>
      <div class="mt-3">
        <span>email: </span>
        <span> {{ authStore.user?.email }}</span>
      </div>
    </div>
  </div>
</template>
