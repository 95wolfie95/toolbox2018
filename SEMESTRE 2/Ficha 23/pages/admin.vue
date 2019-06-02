<template>
  <div class="container">
    <header class="main-header">
      <nav class="main-nav">
        <ul class="nav-links">
          <nuxt-link to="/" tag="li" class="nav-link">
            <a>Home</a>
          </nuxt-link>
        </ul>
      </nav>
    </header>
    <br>
    <br>
    <br>
    <form @submit.prevent="submeterFormulario" class="form">
      <div class="input-control">
        <label for>Produto</label>
        <input type="text" v-model="novoProduto.produto">
      </div>

      <div class="input-control">
        <label for>Valor</label>
        <input type="text" v-model="novoProduto.valor">
      </div>
      <div class="button-container">
        <button type="submit" class="button">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      novoProduto: {
        produto: "",
        valor: ""
      }
    };
  },
  methods: {
    submeterFormulario() {
      return axios.post(
        "https://ficha22.firebaseio.com/.json",
        this.novoProduto
      );
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>




<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #022d30;
  height: 4.5rem;
}

.main-nav {
  height: 100%;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
}

.nav-link a {
  display: block;
  text-decoration: none;
  color: white;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: #06c4d1;
}

.nav-link.nuxt-link-exact-active {
  border-bottom: 3px solid #06c4d1;
}

.form {
  max-width: 550px;
  box-sizing: border-box;
  margin: 30px;
  margin-top: 60px;
  padding: 30px;
  text-align: justify;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.button {
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #06c4d1;
  color: #06c4d1;
  text-decoration: none;
  padding: 10px 30px;
}

.button-container {
    display: flex;
    justify-content: flex-end;
}

.button:hover,
.button:active {
  color: #fff;
  background-color: #06c4d1;
}

.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
  color: #06c4d1;
}

.input-control input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus {
  background-color: #eee;
  outline: none;
}
</style>
