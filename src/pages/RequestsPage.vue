<template>
<div class="header-wrapper">Заявки</div>
<div class="table-wrapper">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          Идентификатор
        </TableHead>
        <TableHead>
          Заголовок
        </TableHead>
        <TableHead>
          Описание
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="request in mockRequests" :key="request.id">
        <TableCell class="w-[150px]">
          {{request.id}}
        </TableCell>
        <TableCell>
          {{request.title}}
        </TableCell>
        <TableCell>
          {{request.description}}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
</template>

<script setup lang="ts">
import requests from "../services/requests.ts";
import {onMounted, ref} from "vue";
import {  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,} from "@/components/ui/table";
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

const mockRequests: Request[] = [
  {id: 1, title: "Test", description: "TestDesc"},
  {id: 2, title: "Test1", description: "TestDesc1"}
]

onMounted(fetchRequests())

</script>

<style scoped>
 .header-wrapper{
  margin-bottom: 20px;
  font-family: var(--ffamily);
  font-weight: 500;
  font-size: 36px;
 }
 .table-wrapper{
  font-family: var(--ffamily);
  font-weight: 300;
 }
</style>