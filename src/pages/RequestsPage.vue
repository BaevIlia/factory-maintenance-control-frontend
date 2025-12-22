<template>
<div class="requests">Test</div>
</template>

<script setup lang="ts">
import requests from "../services/requests.ts";
import {onMounted, ref} from "vue";
interface Request{
  id: number;
  title: string;
  description: string;
}

const requestsList = ref<Request[]>([]);

const fetchRequests = async () => {
  try{
    const response = await requests.getRequests();

    requestsList.value = response.data.data;
  }
  catch (error) {
    console.log(error);
  }
}

onMounted(fetchRequests())

</script>

<style scoped>

</style>