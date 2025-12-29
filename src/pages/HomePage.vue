<template>
  <div>
    Главная страница
  </div>
  <div>
    <a>
      <router-link to="/requests">Перейти на страницу заявок</router-link>
    </a>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import {Button} from '@/components/ui/button'
</script>

<style scoped>
</style>