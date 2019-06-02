<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Name: {{ user.name }}</p>
    <a href="#" @click="logout" class="button--green">Logout</a>
    </ion-content>
  </div>
</template>

<script>
import axios from "axios"
import router from "../router"
export default {
  name: "Dashboard",
  data () {
    return {
      user: {
        name: "Offline"
      }
    }
  },
  methods: {
    getUserData: function () {
      let self = this
      axios.get("/api/user")
        .then((response) => {
          console.log(response)
          self.$set(this, "user", response.data.user)
        })
        .catch((errors) => {
          console.log(errors)
          router.push("/")
        })
    },
    logout(e) {
      axios
        .get("/api/logout")
        .then(() => {
          console.log("Logged out");
          router.push("/");
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  },
  mounted () {
    this.getUserData()
  }
}

</script>