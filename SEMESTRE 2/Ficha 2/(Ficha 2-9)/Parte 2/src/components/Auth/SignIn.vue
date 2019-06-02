<template>
    <v-container>
        <v-layout align-center justify-center>
            <v-flex md6>
                <v-card class="elevation-3" width="500">
                    <v-toolbar color="accent">
                        <h2>Login</h2>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-on:submit.prevent="login" id="submitform">
                            <v-text-field prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-flex text-center>
                                    <v-btn type="submit" color="primary" form="submitform">Login</v-btn>
                                  <router-link to="/signup"><v-btn type="submit" color="primary">Registar</v-btn></router-link>
                                </v-flex>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import router from "../../router";
import axios from "axios";
    export default {
        name: 'Login',
        methods:{
            login: (e) =>{
                e.preventDefault();
                let email = e.target.elements.email.value;
                let password = e.target.elements.password.value;
                let login = () =>{
                    let data = {
                        email: email,
                        password: password
                    }
                    axios.post("/api/login", data)
                        .then((Response) =>{
                            console.log("Logged in");
                            router.push("/profile");
                        })
                        .catch((errors) => {
                            console.log(errors);
                        })
                }
                login();
            }
        }
    }
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

