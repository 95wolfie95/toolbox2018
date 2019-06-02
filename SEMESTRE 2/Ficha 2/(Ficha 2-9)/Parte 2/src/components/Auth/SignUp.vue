<template>
<v-container>
        <v-layout align-center justify-center>
            <v-flex md6>
                <v-card class="elevation-3" width="500">
                    <v-toolbar color="accent">
                        <h2>Registar</h2>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-on:submit.prevent="login" id="submitform">
                            <v-text-field prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-flex text-center>
                                    <v-btn type="submit" color="primary" form="submitform">Registar</v-btn>
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
    export default {
        name: 'SignUp'
    }
</script>

