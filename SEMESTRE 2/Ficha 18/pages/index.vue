<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">my-first-nuxt-app</h1>
      <h2 class="subtitle">My exquisite Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <hr>
      <div class="other link">
        <nuxt-link to=/users/User_1>User 1</nuxt-link>
        <nuxt-link to=/users/User_2>User 2</nuxt-link>
        <nuxt-link to=/users/User_3>User 3</nuxt-link>
      </div>
      <hr>
      <div class="other">
        <input size="75px" type="text" v-model="userId">
        <button @click="onLoadUser">Load user</button>
      </div>
      <hr>
    </div>
  </section>
</template>


<script>
import Logo from "~/components/Logo.vue";

export default {
  data() {
    return {
      userId: ''
    };
  },

  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    }
  },
  components: {
    Logo
  }
};
</script>

<style>
.other {
  display: flex;
  flex-direction: column;
  padding: 25px;
}

.link {
  font-size: 15px;
  flex-direction: row;
  font-family: hack;
  justify-content: space-around;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: purple;
}
/* for backup purposes */
</style>
