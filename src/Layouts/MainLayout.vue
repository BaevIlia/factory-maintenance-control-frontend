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
    border-right: 5px rgb(195, 195, 195) solid;
    display: flex;
    min-height: 100vh;
    width: 250px;
    margin: 0px 20px 0px 0px;
    padding:0;
    background-color: #8bc1ff;
  }
  .container-content{
    flex: 1;
    width: 100%;
    min-height: 100vh;
    margin: 15px 0px 0px 0px;
    padding:0;
  }
</style>