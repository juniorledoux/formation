<script setup>
import { useFormStore } from '../stores/Form.js'
import { onMounted, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const formStore = useFormStore()
onBeforeMount(async () => {
  await formStore.recupuser()
})
</script>
<template>
  <div>
    <div class=""></div>
    <h1 class="text-center">VOIR SES INFORMATIONS</h1>

    <div class="mt-3">
      <button @click="formStore.deleted(formStore.dataform)">supprimer</button>
      <div class="mt-3">
        <span>AGE:</span>
        <span>{{ formStore.dataform?.age }} </span>
      </div>
      <div class="mt-3">
        <span>SEXE:</span>
        <span>{{ formStore.dataform?.sexe }} </span>
      </div>
    </div>

    <form @submit.prevent="formStore.modify(formStore.dataform)">
      <div class="mt-3 form-group">
        <label for="age" class="form-label">AGE</label>
        <input type="number" v-model="formStore.dataform.age" class="form-control" id="age" />
      </div>
      <div class="mt-3 form-group">
        <label for="sexe" class="form-label">SEXE</label>
        <input
          type="text"
          v-model="formStore.dataform.sexe"
          class="form-control"
          id="sexe"
          placeholder="entrer votre sexe"
        />
      </div>
      <button type="submit btn-btn primary">modifier</button>
    </form>
  </div>
</template>
