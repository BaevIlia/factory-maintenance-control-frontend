<template>
  <div>
    <button @click="tryFetch">Нажми меня</button>
  </div>
</template>

<script setup lang="ts">

import requests from "@/services/requests.ts";

const tryFetch = async ()  => {
  try{
    const response = await requests.getRequest(3);

    console.log(response.data);
  }
  catch (error) {
    console.log(error);
  }
}

</script>

<style scoped>
</style>