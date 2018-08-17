<template>
  <div>
  <!-- Mobile -->
  <mq-layout mq="mobile">
    <MobileLayout/>  
  </mq-layout>  
  <!-- Desktop -->
  <mq-layout mq="desktop+">
    <DesktopLayout/>
  </mq-layout>  
  <!-- Tablet -->
  <mq-layout mq="laptop">
    <LaptopLayout/>
  </mq-layout>
  <mq-layout mq="tablet">
    <TabletLayout/>
  </mq-layout>
  </div>
</template>

<script>
  import axios from 'axios';
  import MobileLayout from './components/Mobile/index';
  import TabletLayout from './components/Tablet/index';
  import DesktopLayout from './components/Desktop/index';
  import LaptopLayout from './components/Laptop/index';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        datas:[
          {
            src:'https://res.cloudinary.com/green-life/image/upload/v1533901162/FEATURED_2_copy.png'
          },
          {
            src: 'https://res.cloudinary.com/green-life/image/upload/v1533901162/FEATURED_4.png'
          },
          {
            src: 'https://res.cloudinary.com/green-life/image/upload/v1533901162/FEATURED_3_copy.png'
          },
          {
            src:'https://res.cloudinary.com/green-life/image/upload/v1533901162/FEATURED_3.png'
          },
          {
            src:'https://res.cloudinary.com/green-life/image/upload/v1533901162/FEATURED_4_copy.jpg'
          },
          {
            src:'https://res.cloudinary.com/green-life/image/upload/v1533901161/FEATURED_1_copy.png'
          },
          {
            src:'https://res.cloudinary.com/green-life/image/upload/v1533901161/FEATURED_1.png'
          },
          {
            src:'https://res.cloudinary.com/green-life/image/upload/v1533901161/FEATURED_2.png'
          }
        ],
        dialog: false,
        newTodo: '',
        countItem: this.$store.state.count,
        items: [
          {
            src: 'https://sv1.uphinhnhanh.com/images/2018/08/06/SLIDER.jpg'
          }
        ]
      }
    },
    name: 'App',
    computed: mapGetters(['remaining', 'completed']),
    methods: {
      async clearAll() {
        await localStorage.clear();
        await window.location.reload();
      },
      ...mapActions(['addTodo', 'deleteTodo'])
    },
    components:{
      MobileLayout,
      DesktopLayout,
      TabletLayout,
      LaptopLayout
    }
  }
</script>
<style>

</style>