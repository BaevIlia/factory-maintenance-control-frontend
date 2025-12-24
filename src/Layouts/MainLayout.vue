<template>
  <div class="content-wrapper">
    <div class="menu-container" >

    </div>
    <div class="container-content">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content-wrapper{
  display: flex;
}
  .menu-container{
    display: flex;
    min-height: 100vh;
    width: 300px;
    margin: 0;
    padding:0;
    background-color: #4295f5;
  }
  .container-content{
    border: black solid 1px;
    flex: 1;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding:0;
  }
</style>