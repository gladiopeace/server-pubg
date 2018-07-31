<template>
    <v-container fluid>
        <v-layout justify-center row>
            <h1>Thanh toán</h1>
            <ul>
                <li v-for = "(item,index) in getItem" :key="index">
                    <img :src="item.payload.src" alt="">
                </li>
            </ul>
        </v-layout>
    </v-container>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        computed: mapGetters(['remaining', 'completed', 'getItem']),
        methods: mapActions(['addTodo'])
    }
</script>