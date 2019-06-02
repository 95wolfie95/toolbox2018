<template>
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>Hello World</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>Welcome to @ionic/vue</h1>
    <img src="../assets/logo.png" alt="Vue logo">
  </ion-content>
</div>
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
  name : 'Home'
};
</script>