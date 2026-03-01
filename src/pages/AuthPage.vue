<template>
<div class="content-container">
  <div class="auth-block">
    <input class="login-input" value="Электронная почта"/>
    <input class="password-input" value="Пароль"/>
    <button class="enter-button">Войти</button>
    <button class="reg-button">Зарегистрироваться</button>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: azure;
}
.auth-block{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 400px;
  border-radius: 25px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
}
.login-input{
  padding: 15px;
  width: 350px;
  height: 40px;
  border: 1px solid black;
  border-radius: 25px;
}
.password-input{
  padding: 15px;
  width: 350px;
  height: 40px;
  border: 1px solid black;
  border-radius: 25px;
  margin-top: 20px;
}
.enter-button{
  margin-top: 40px;
  width: 200px;
  height: 40px;
  border: 1px solid black;
  border-radius: 25px;
}
.reg-button{
  width: 200px;
  height: 40px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 25px;
}
</style>