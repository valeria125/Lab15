<script setup>
import { ref, onMounted } from 'vue'

// Объявляем переменные для данных
const headerData = ref(null)
const mainData = ref(null)
const footerData = ref(null)

// Функция для загрузки данных из db.json
async function fetchData() {
  try {
    const response = await fetch('/db.json') // убедитесь, что файл в public/
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    headerData.value = data.header
    footerData.value = data.footer
  } catch (error) {
    console.error('Ошибка загрузки данных:', error)
  }
}

// Загружаем данные при монтировании компонента
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="app">
    <HeaderComponent v-if="headerData" :header="headerData" />
    <NuxtPage />
    <FoterComponent v-if="footerData" :footer="footerData" />
  </div>
</template>


<style scoped>
/* Общие стили */
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
}

body  {
  margin: 0 !important;
  font-family: 'Arial', sans-serif;

}
</style> 