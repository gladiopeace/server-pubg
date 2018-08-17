<template>
  
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
        axios.get(`http://localhost:3000/page?id=${newValue}`)
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