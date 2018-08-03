<template>
  <v-container fluid>
    <v-divider light></v-divider>
    <v-layout justify-center row>
      <v-tabs>
        <v-tab>Mới nhất</v-tab>
        <v-tab>Bán chạy</v-tab>
        <v-tab>Yêu thích</v-tab>
      </v-tabs>
    </v-layout>
    <v-layout justify-center>
      <v-pagination v-model="currentPage" :length="6"></v-pagination>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex sm10>
        <v-layout justify-center row wrap>
          <v-flex xs6 sm3 v-for="(item,index) in getDataFromServer " :key="index">
            <v-card style="margin:5px">
              <v-card-media :src="item.src" height="200px"></v-card-media>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{item.title}} - {{item.price}}</h3>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange" @click="addTodo({src:item.src})">Buy</v-btn>
                <v-btn flat color="orange">Like</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import axios from 'axios'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        currentPage: 1,
        data : []
      }
    },
    computed: {
      ...mapGetters(['remaining', 'completed', 'getDataFromServer'])
    },
    methods: {

      ...mapActions(['addTodo'])
    },
    watch: {
      currentPage: function (newValue) {
        console.log(newValue)
        axios.get(`http://45.32.47.212:3000/page?id=${newValue}`)
        .then(res=>{
          this.$store.state.product = res.data
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>