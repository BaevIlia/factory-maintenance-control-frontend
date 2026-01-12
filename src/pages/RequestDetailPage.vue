<!--TODO: попробовать добавить выпадающее меню-->
<template>
<div class="header-wrapper">
  Заголовок
</div>
  <div class="buttons-wrapper">
    <Button class="update-button">Изменить</Button>
  </div>
  <div class="main-content-wrapper">
    <div class="detail-wrapper">
      <div class="statuses-wrapper">
        <span style="padding-bottom: 15px">Тип:</span>
        <span style="padding-bottom: 15px">Статус:</span>
        <span>Приоритет:</span>
      </div>
      <div class="description-wrapper">

      </div>
    </div>
    <div class="rightside-wrapper">

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {Button} from "@/components/ui/button/index.js";

const route = useRoute();

const requestId = computed(() => route.params.id);
</script>

<style scoped>
.header-wrapper{
  border: 1px solid black;
  width: 100%;
  height: 8%;
  padding: 5px;
}
.buttons-wrapper{
  border: 1px solid black;
  width: 100%;
  height: 5%;
  align-content: center;
  padding: 5px;
}
 .main-content-wrapper{
  border: black 1px solid;
   width: 100%;
   height: 87%;
   padding: 5px;
   display: flex;
 }
.detail-wrapper{
  border: black 1px solid;
  width: 80%;
  height: 100%;
  padding: 10px;
}
.rightside-wrapper{
  border: black 1px solid;
  width: 20%;
  height: 100%;
}
.update-button{
  width: 100px;
}
.statuses-wrapper{
  border: 1px solid black;
  height: 25%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.description-wrapper{
  border: 1px solid black;
  width: 100%;
  height: 30%;
}
</style>