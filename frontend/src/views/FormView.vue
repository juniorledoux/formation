<script setup>
import { useFormStore } from '../stores/Form.js'
import { ref } from 'vue'
const formStore = useFormStore()
let data = ref({
  age: 0,
  sexe: ''
})
</script>
<template>
  <div class="w-50 m-auto">
    <h1>PETIT FORMULAIRE</h1>
    <div
      class="alert alert-success d-flex align-items-center w-50 m-auto mt-5"
      role="alert"
      v-if="formStore.successMsg"
    >
      <div>{{ formStore.successMsg }}</div>
    </div>
    <div
      class="alert alert-danger d-flex align-items-center w-50 m-auto mt-5"
      role="alert"
      v-if="formStore.errorMsg"
    >
      <div>{{ formStore.errorMsg }}</div>
    </div>
    <form @submit.prevent="formStore.form(data)">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Age</label>
        <input
          type="number"
          v-model="data.age"
          class="form-control"
          id="age"
          placeholder="entrer votre age"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">sexe</label>
        <input
          type="text"
          class="form-control"
          v-model="data.sexe"
          id="sexe"
          placeholder="entrer votre sexe"
        />
      </div>
      <button type="submit btn btn-success">cliquer</button>
    </form>
  </div>
</template>
