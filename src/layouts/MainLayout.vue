<template>
  <div class="content-wrapper">
    <div class="menu-container" >
      <div class ='main-icon'>
        <MainAppIcon></MainAppIcon>
      </div>
      <aside class="sidebar">
        <nav class="navigation">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            :title="item.title"
            class="navigation-link">
            <component :is="item.icon" v-if="item.icon" class="navigation-icon"></component>
            <span class="navigation-title">{{item.title}}</span>
          </router-link>
        </nav>
      </aside>
    </div>
    <div class="container-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
  import HomePageIcon from "@/components/myComponents/Icons/HomePageIcon.vue";
  import MainAppIcon from "@/components/myComponents/Icons/MainAppIcon.vue";
  import RequestsIcon from "@/components/myComponents/Icons/RequestsIcon.vue";
  import ProfileIcon from "@/components/myComponents/Icons/ProfileIcon.vue";

  const menuItems = [
    {path: '/', title: 'Главная', icon: HomePageIcon},
    {path: '/requests', title: 'Заявки', icon: RequestsIcon},
    {path: '/profile', title: 'Профиль', icon: ProfileIcon}
  ]
</script>

<style scoped>
.content-wrapper{
  display: flex;
  background: azure;
}
  .menu-container{
    border-right: 5px rgb(195, 195, 195) solid;
    display: flex;
    min-height: 100vh;
    width: 250px;
    margin: 0px 20px 0px 0px;
    background-color: #1e386a;
    flex-direction: column;
  }
  .container-content{
    flex: 1;
    width: 100%;
    min-height: 100vh;
    margin: 15px 0px 0px 0px;
    padding:0;
  }
  .navigation{
    display: flex;
    flex-direction: column;
  }
  .navigation-link{
    display: flex;
    margin-bottom: 40px;
    margin-left: 10px;
  }
  .navigation-title{
    color: white;
    font-size: 20px;
  }
  .navigation-icon{
    margin-right: 10px;
  }
  .main-icon{
    margin-bottom: 40px;
    padding: 10px;
  }
</style>