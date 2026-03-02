<template>
<div class="content-container">
  <div class="auth-block">
    <input class="login-input" placeholder="Введите email" v-model="email"/>
    <input class="password-input" type="password" placeholder="Введите пароль" v-model="password"/>
    <button class="enter-button" @click="login">Войти</button>
  </div>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import auth from "@/services/auth.ts";

const email = ref('')
const password = ref('')

const login = async () => {
  try{
    const response = await auth.login(email.value, password.value);

    console.log(response);
  }
  catch(error){
    console.log(error);
  }
}
</script>

<style scoped>
.content-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
}
.auth-block{
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  height: 500px;
  border-radius: 25px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
}
.login-input{
  background: #ededed;
  padding: 15px;
  width: 450px;
  height: 60px;
  border-radius: 25px;
  border: 2px solid white;
}
.login-input:hover{
  border-color: #1e386a;
}
.login-input:focus{
  border-color: #1e386a;
  outline: none;
}
.password-input{
  background: #ededed;
  padding: 15px;
  width: 450px;
  height: 60px;
  border-radius: 25px;
  margin-top: 20px;
  border: 2px solid white;
}
.password-input:hover{
  border-color: #1e386a;
}
.password-input:focus{
  border-color: #1e386a;
  outline: none;
}
.enter-button{
  margin-top: 70px;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  background: #1e386a;
  color: white;
}
.enter-button:hover{
  background: #2e57a3;
}
</style>