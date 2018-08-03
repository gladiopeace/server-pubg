<template>
    <v-container fluid>
        <v-layout justify-center wrap>
            <v-flex lg6>
                <v-form>
                    <v-text-field v-model="username" label="Username" required type="text"></v-text-field>
                    <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
                </v-form>
            </v-flex>
        </v-layout>
        <v-layout justify-center>
            <v-btn @click="login()">Login</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                password: '',
                username : ''
            }
        },
        methods: {
            login() {
                axios.post(`http://45.32.47.212:3000/login?username=${this.username}&password=${this.password}`)
                .then(res=>{
                   if(res.data == 'Failed'){
                       console.log("Failed");
                   }
                   else{
                       console.log("Success");
                   }
                });
            }
        }
    }
</script>