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
        <span style="padding-bottom: 15px">Тип: {{mockRequestDetail.type}}</span>
        <span style="padding-bottom: 15px">Статус: {{mockRequestDetail.requestStatus}}</span>
        <span>Приоритет: {{mockRequestDetail.priority}}</span>
      </div>
      <div class="description-wrapper">

      </div>
    </div>
    <div class="rightside-wrapper">
      <span style="padding-bottom: 15px">Создатель: {{mockRequestDetail.authorName}}</span>
      <span style="padding-bottom: 15px">Ответственный: {{mockRequestDetail.responsibleName}}</span>
      <span style="padding-bottom: 15px">Дата создания: {{mockRequestDetail.createdAt}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import {Button} from "@/components/ui/button/index.js";
import requests from "@/services/requests.js";

interface RequestDetail{
  id : number,
  title : string,
  description : string,
  createdAt : Date,
  requestStatus : string,
  type : string,
  priority : string,
  authorName : string,
  responsibleName : string,
}

const route = useRoute();
const requestId = computed(() => route.params.id);
let requestDetail : ref<RequestDetail>;

const fetchRequestDetail = async () => {
  try{
    const id = Number(requestId.value);
    const response = await requests.getRequest(id);

    requestDetail = response.data;
  }
  catch (error) {
    console.log(error);
  }
}

const mockRequestDetail : RequestDetail = {
  id : 3,
  title : "Test",
  description : "TestDesc",
  createdAt : new Date(2026, 2, 10, 0, 0, 0),
  requestStatus : "created",
  type : "maintenance",
  priority : "medium",
  authorName : "Test",
  responsibleName : "Test"
}

//onMounted(() => fetchRequestDetail());
</script>

<style scoped>
.header-wrapper{

  width: 100%;
  height: 8%;
  padding: 5px;
}
.buttons-wrapper{

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

  width: 80%;
  height: 100%;
  padding: 10px;
}
.rightside-wrapper{
  padding: 10px;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.update-button{
  width: 100px;
}
.statuses-wrapper{

  height: 25%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.description-wrapper{

  width: 100%;
  height: 30%;
}
</style>