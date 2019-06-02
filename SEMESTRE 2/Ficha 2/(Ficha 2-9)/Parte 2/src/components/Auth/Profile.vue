<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex md6>
          <v-card class="elevation-3" width="500">
            <v-toolbar color="accent">
              <h2>Dashboard</h2>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form v-on:submit.prevent="login" id="submitform">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-flex text-center>
                    <h1>Name: <b><i>{{ user.name }}</i></b></h1>
                  </v-flex>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <br>
    <br>
    <br>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";

export default {
  name: "Profile",
  data() {
    return {
      user: {
        name: "Offline"
      }
    };
  },
  methods: {
    getUserData: function() {
      let self = this;
      axios
        .get("/api/user")
        .then(response => {
          self.$set(this, "user", response.data.user);
        })
        .catch(errors => {
          router.push("/");
        });
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>