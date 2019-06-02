<template>
  <div>
    <h2>Login</h2>
    <form v-on:submit="login">
      <input type="text" name="email" placeholder="email" class="input-control">
      <br>
      <input type="password" name="password" placeholder="password" class="input-control">
      <br>
      <input type="submit" value="Login" class="button--green">
    </form>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  name: "Login",
  methods: {
    login: e => {
      e.preventDefault();
      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;
      let login = () => {
        let data = {
          email: email,
          password: password
        };
        axios
          .post("/api/login", data)
          .then(response => {
            console.log("Logged in");
            router.push("/dashboard");
          })
          .catch(errors => {
            console.log(errors);
          });
      };
      login()
    }
  }
};
</script>

<style scoped>

.input-control {
    margin: 10px 0;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
}

</style>