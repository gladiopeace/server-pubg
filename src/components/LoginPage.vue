<template>
   <v-container fluid>
       <h1>this is login</h1>

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
                axios.post(`http://localhost:3000/login?username=${this.username}&password=${this.password}`)
                .then(res=>{
                    alert(res.data)
                });
            }
        }
    }
</script>